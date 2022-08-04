import { ReactNode, useEffect, useState } from 'react';
import {
  OptionContext,
  PlayContext,
  StateContext,
  TimeContext,
} from './context';
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

  // Options

  const changeOption = (choice: string): void =>
    setState((prev): IState => ({ ...prev, option: choice }));

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

  const isSession = (): void =>
    setState((prev): IState => ({ ...prev, minutes: session, seconds: 0 }));

  const isShort = (): void =>
    setState((prev): IState => ({ ...prev, minutes: short, seconds: 0 }));

  const isLong = (): void =>
    setState((prev): IState => ({ ...prev, minutes: long, seconds: 0 }));

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
              setState(
                (prev): IState => ({
                  ...prev,
                  minutes: session,
                  seconds: 0,
                  option: 'session',
                })
              );
            }
            if (option === 'session') {
              if (lastBreak === 'long') {
                setState(
                  (prev): IState => ({
                    ...prev,
                    minutes: short,
                    seconds: 0,
                    option: 'short',
                    lastBreak: 'short',
                  })
                );
              } else {
                setState(
                  (prev): IState => ({
                    ...prev,
                    minutes: long,
                    seconds: 0,
                    option: 'long',
                    lastBreak: 'long',
                  })
                );
              }
            }
          }
        } else {
          setState((prev): IState => ({ ...prev, seconds: prev.seconds-- }));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds, minutes, option, play, lastBreak, session, short, long]);

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

  useKey('Escape', (event:any)=> {
    if (event?.key === 'Escape') {
      console.log(event?.key)
    }
  });
  
  useKey('Space', (event:any)=> {
    if (event?.key === ' ') {
      console.log(event?.key)
    }
  });

  useKey('ArrowUp', (event:any)=> {
    if (event?.key === 'ArrowUp') {
      console.log(event?.key)
    }
  });
  
  useKey('ArrowDown', (event:any)=> {
    if (event?.key === 'ArrowDown') {
      console.log(event?.key)
    }
  });

  useKey('Tab', (event:any)=> {
    if (event?.key === 'Tab') {
      console.log(event?.key)
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
        <OptionContext.Provider value={{ changeOption }}>
          <PlayContext.Provider value={{ togglePlay, setReset }}>
            {children}
          </PlayContext.Provider>
        </OptionContext.Provider>
      </TimeContext.Provider>
    </StateContext.Provider>
  );
};
