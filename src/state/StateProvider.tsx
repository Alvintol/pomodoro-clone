import { ReactNode, useState } from 'react';
import { OptionContext, StateContext, TimeContext } from './context';
import defaultState, { IState } from './state';

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IState>(defaultState);

  const addTime = (): void => {
    setState((prev) => ({
      ...prev,
      minutes: prev.minutes++,
    }));
  };

  const subtractTime = (): void => {
    setState((prev) => ({
      ...prev,
      minutes: prev.minutes--,
    }));
  };

  const changeOption = (choice: string): void => {
    setState((prev) => ({ ...prev, option: choice }));
  };

  const isSession = (): void => {
    setState((prev) => ({ ...prev, minutes: 25 }));
  };

  const isShortBreak = (): void => {
    setState((prev) => ({ ...prev, minutes: 5 }));
  };

  const isLongBreak = (): void => {
    setState((prev) => ({ ...prev, minutes: 15 }));
  };

  return (
    <StateContext.Provider value={state}>
      <TimeContext.Provider
        value={{ addTime, subtractTime, isSession, isShortBreak, isLongBreak }}
      >
        <OptionContext.Provider value={{ changeOption }}>
          {children}
        </OptionContext.Provider>
      </TimeContext.Provider>
    </StateContext.Provider>
  );
};
