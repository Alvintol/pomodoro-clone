import { ReactNode, useCallback, useEffect, useState } from 'react';
import { PlayContext, StateContext, TimeContext } from './context';
import { Howl } from 'howler';
import defaultState, { IState } from './state';
import useKey from '../helpers/eventListener';

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IState>(defaultState);
  const { minutes, seconds, option, play, lastBreak, session, short, long } =
    state;

  // Sound

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

  // Time

  const addTime = (id: string): void => {
    switch (id) {
      case 'short':
        setState(
          (prev): IState => ({
            ...prev,
            minutes: prev.minutes++,
            short: prev.short++,
          })
        );
        break;
      case 'long':
        setState(
          (prev): IState => ({
            ...prev,
            minutes: prev.minutes++,
            long: prev.long++,
          })
        );
        break;
      default:
        setState(
          (prev): IState => ({
            ...prev,
            minutes: prev.minutes++,
            session: prev.session++,
          })
        );
        break;
    }
  };

  const subtractTime = (id: string): void => {
    switch (id) {
      case 'short':
        setState(
          (prev): IState => ({
            ...prev,
            minutes: prev.minutes--,
            short: prev.short--,
          })
        );
        break;
      case 'long':
        setState(
          (prev): IState => ({
            ...prev,
            minutes: prev.minutes--,
            long: prev.long--,
          })
        );
        break;
      default:
        setState(
          (prev): IState => ({
            ...prev,
            minutes: prev.minutes--,
            session: prev.session--,
          })
        );
        break;
    }
  };

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

  useEffect((): (() => void) | undefined => {
    if (play) {
      const interval = setInterval((): void => {
        clearInterval(interval);

        if (seconds < 1) {
          if (minutes >= 1) {
            setState(
              (prev): IState => ({
                ...prev,
                minutes: prev.minutes--,
                seconds: 59,
              })
            );
          } else {
            playSound();
            if (option !== 'session') {
              isSession();
            }
            if (option === 'session') {
              if (lastBreak === 'long') {
                isShort();
              } else {
                isLong();
              }
            }
          }
        } else {
          setState((prev): IState => ({ ...prev, seconds: prev.seconds-- }));
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

  const togglePlay = (): void => {
    setState(
      (prev): IState => ({
        ...prev,
        play: !prev.play,
      })
    );
  };

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

  // Keyboard Key Press

  useKey('Escape', (event: any) => {
    if (event?.key === 'Escape') {
      setReset(option);
    }
  });

  useKey('Space', (event: any) => {
    if (event?.key === ' ') {
      togglePlay();
    }
  });

  useKey('Enter', (event: any) => {
    if (event?.key === 'Enter') {
      togglePlay();
    }
  });

  useKey('ArrowUp', (event: any) => {
    if (event?.key === 'ArrowUp') {
      addTime(option);
    }
  });

  useKey('ArrowDown', (event: any) => {
    if (event?.key === 'ArrowDown') {
      subtractTime(option);
    }
  });

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
