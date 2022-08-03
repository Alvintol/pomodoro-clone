import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  OptionContext,
  PlayContext,
  StateContext,
  TimeContext,
} from './context';
import defaultState, { IState } from './state';

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IState>(defaultState);
  const { minutes, seconds, play, option } = state;

  const secondsRef = useRef(seconds);
  const minutesRef = useRef(minutes);

  // Options

  const changeOption = (choice: string): void =>
    setState((prev): IState => ({ ...prev, option: choice }));

  // Time

  const addTime = (): void =>
    setState((prev) => ({
      ...prev,
      minutes: prev.minutes++,
    }));

  const subtractTime = (): void =>
    setState((prev) => ({
      ...prev,
      minutes: prev.minutes--,
    }));

  const isSession = (): void =>
    setState((prev): IState => ({ ...prev, minutes: 25 }));

  const isShort = (): void =>
    setState((prev): IState => ({ ...prev, minutes: 5 }));

  const isLong = (): void =>
    setState((prev): IState => ({ ...prev, minutes: 15 }));

  // const toggleMinuteCount = (): void => {
  //   if (minutes > 0) {
  //     // setInterval((): void => {
  //     //   setState(
  //     //     (prev): IState => ({ ...prev, minutes: prev.minutes--, seconds: 59 })
  //     //   );
  //     // }, 60000);
  //     console.log('MINUTES')
  //   }
  // };

  const toggleSecondsCount = () => {
    // setState((prev) => ({
    //   ...prev,
    //   minutes: prev.minutes--,
    //   seconds: 59,
    // }));
    // if (secondsRef === 0 ) return clearInterval()
    if (secondsRef.current > 0) {
      secondsRef.current--;
      setInterval((): void => {
        setState((prev): IState => ({ ...prev, seconds: secondsRef.current }));
      }, 1000);
      console.log('SECONDS');
    }
  };

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setState((prev) => ({
              ...prev,
              minutes: prev.minutes--,
              seconds: 3,
            }));
          } else {
            if (option !== 'session') {
              changeOption('session');
              isSession();
            }
            if (option === 'session') {
              changeOption('short');
              isShort();
            }
          }
        } else {
          setState((prev) => ({ ...prev, seconds: prev.seconds-- }));
        }
      }, 1000);
    }
  }, [seconds, minutes, option, play]);

  // Controls

  const togglePlay = (): void => {
    setState(
      (prev): IState => ({
        ...prev,
        play: !prev.play,
        minutes: 1,
        seconds: 3,
      })
    );
    // toggleMinuteCount();
    toggleSecondsCount();
  };

  const setReset = (option: string): void => {
    let time: number = 25;

    switch (option) {
      case 'short':
        time = 5;
        break;
      case 'long':
        time = 15;
        break;
      default:
        return;
    }
    setState((prev) => ({ ...prev, minutes: time }));
  };

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
