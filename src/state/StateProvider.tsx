import { ReactNode, useCallback, useEffect, useState } from 'react';
import { PlayContext, StateContext, TimeContext } from './context';
import { Howl } from 'howler';
import defaultState, { IState } from './state';
import useKey from '../helpers/eventListener';

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IState>(defaultState);
  const { minutes, seconds, option, play, lastBreak, session, short, long } =
    state;

  // Plays alarm sound
  const playSound = () => {
    const sound = new Howl({
      src: [
        'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav',
      ],
      html5: true,
      volume: 0.5,
    });
    sound.play();
  };

  // Functions associated with time control

  // Adds a minute to current display timer and changes default option time
  const addTime = (id: string): void => {
    switch (id) {
      case 'short':
        setState(
          (prev): IState => ({
            ...prev,
            minutes: ++prev.minutes,
            short: ++prev.short,
          })
        );
        break;
      case 'long':
        setState(
          (prev): IState => ({
            ...prev,
            minutes: ++prev.minutes,
            long: ++prev.long,
          })
        );
        break;
      default:
        setState(
          (prev): IState => ({
            ...prev,
            minutes: ++prev.minutes,
            session: ++prev.session,
          })
        );
        break;
    }
  };

  // Subtracts a minute to current display timer and changes default option time
  const subtractTime = (id: string): void | null => {

    // Stops from subtracting below 1 minute
    if (minutes === 1) return null;

    switch (id) {
      case 'short':
        setState(
          (prev): IState => ({
            ...prev,
            minutes: --prev.minutes,
            short: --prev.short,
          })
        );
        break;
      case 'long':
        setState(
          (prev): IState => ({
            ...prev,
            minutes: --prev.minutes,
            long: --prev.long,
          })
        );
        break;
      default:
        setState(
          (prev): IState => ({
            ...prev,
            minutes: --prev.minutes,
            session: --prev.session,
          })
        );
        break;
    }
  };

  // Options button controls

  // Changes state to display Session option
  const isSession = useCallback(
    (): void =>
      setState(
        (prev): IState => ({
          ...prev,
          minutes: session,
          seconds: 0,
          option: 'session',
        })
      ),
    [session]
  );

  // Changes state to display Short Break option
  const isShort = useCallback(
    (): void =>
      setState(
        (prev): IState => ({
          ...prev,
          minutes: short,
          seconds: 0,
          option: 'short',
          lastBreak: 'short',
        })
      ),
    [short]
  );

  // Changes state to display Long Break option
  const isLong = useCallback(
    (): void =>
      setState(
        (prev): IState => ({
          ...prev,
          minutes: long,
          seconds: 0,
          option: 'long',
          lastBreak: 'long',
        })
      ),
    [long]
  );


  // Display timer 

  useEffect((): (() => void) | undefined => {

    // Only triggers if state.play is true
    if (play) {

      // Starts interval
      const interval = setInterval((): void => {

        // Shuts down existing interval, if active 
        clearInterval(interval);

        if (seconds === 0) {
          if (minutes !== 0) {
            
            // Triggers if there are minutes remaining in state 
            setState(
              (prev): IState => ({
                ...prev,
                minutes: --prev.minutes,
                seconds: 59,
              })
            );
          } else {

            // Triggers if all time in current session/break run out

            playSound();
            if (option !== 'session') {

              // Switches to Task/Work Session
              isSession();
            }
            if (option === 'session') {

              // Switches to Break next break
              if (lastBreak === 'long') {
                isShort();
              } else {
                isLong();
              }
            }
          }
        } else {

          // Only remove seconds from remaining time
          setState((prev): IState => ({ ...prev, seconds: --prev.seconds }));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [
    seconds,
    minutes,
    option,
    play,
    lastBreak,
    session,
    short,
    long,
    isSession,
    isShort,
    isLong,
  ]);

  // Controls

  // Changes state.play to true/false
  const togglePlay = (): void => {
    setState(
      (prev): IState => ({
        ...prev,
        play: !prev.play,
      })
    );
  };

  // Reverts timer numbers back to assigned default state 
  const setReset = (option: string): void => {
    let time: number = 25;

    switch (option) {
      case 'short':
        time = short;
        break;
      case 'long':
        time = long;
        break;
      default:
        time = session;
        break;
    }
    setState(
      (prev): IState => ({ ...prev, minutes: time, seconds: 0, play: false })
    );
  };

  // Keyboard Key Press listeners 

  // Resets Timer
  useKey('Escape', (event: any) => {
    if (event?.key === 'Escape') {
      setReset(option);
    }
  });

  // Toggles Play button
  useKey('Space', (event: any) => {
    if (event?.key === ' ') {
      togglePlay();
    }
  });

  // Toggles Play button
  useKey('Enter', (event: any) => {
    if (event?.key === 'Enter') {
      togglePlay();
    }
  });

  // Adds time to timer
  useKey('ArrowUp', (event: any) => {
    if (event?.key === 'ArrowUp') {
      addTime(option);
    }
  });

  // Subtract time from timer
  useKey('ArrowDown', (event: any) => {
    if (event?.key === 'ArrowDown') {
      subtractTime(option);
    }
  });

  // Changes session/break option left/up 
  useKey('ArrowLeft', (event: any) => {
    if (event?.key === 'ArrowLeft') {
      switch (option) {
        case 'short':
          isSession();
          break;
        case 'long':
          isShort();
          break;
        default:
          isLong();
          break;
      }
    }
  });

  // Changes session/break option right/down 
  useKey('ArrowRight', (event: any) => {
    if (event?.key === 'ArrowRight') {
      switch (option) {
        case 'short':
          isLong();
          break;
        case 'long':
          isSession();
          break;
        default:
          isShort();
          break;
      }
    }
  });

  // Changes session/break option right/down 
  useKey('Tab', (event: any) => {
    if (event?.key === 'Tab') {
      event.preventDefault();
      switch (option) {
        case 'short':
          isLong();
          break;
        case 'long':
          isSession();
          break;
        default:
          isShort();
          break;
      }
    }
  });

  // Wraps all above functions and state through the app to avoid prop drilling
  return (
    <StateContext.Provider value={state}>
      <TimeContext.Provider
        value={{
          addTime,
          subtractTime,
          isSession,
          isShort,
          isLong,
        }}
      >
        <PlayContext.Provider value={{ togglePlay, setReset }}>
          {children}
        </PlayContext.Provider>
      </TimeContext.Provider>
    </StateContext.Provider>
  );
};
