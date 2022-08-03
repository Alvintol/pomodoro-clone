import { ReactNode, useState } from 'react';
import {
  OptionContext,
  PlayContext,
  StateContext,
  TimeContext,
} from './context';
import defaultState, { IState } from './state';

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IState>(defaultState);
  const { minutes, seconds } = state;

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

  const toggleMinuteCount = (): void => {
    while (minutes > 0) {
      setTimeout(() => {
        setState(
          (prev): IState => ({ ...prev, minutes: prev.minutes--, seconds: 59 })
        );
      }, 60000);
    }
  };

  const toggleSecondCount = (): void => {
    while (seconds > 0) {
      setTimeout(() => {
        setState((prev): IState => ({ ...prev, seconds: prev.seconds-- }));
      }, 1000);
    }
  };

  // Options

  const changeOption = (choice: string): void =>
    setState((prev): IState => ({ ...prev, option: choice }));

  // Controls

  const togglePlay = (): void => {
    setState((prev): IState => ({ ...prev, play: !prev.play }));
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
