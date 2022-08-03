import { ReactNode, useState } from 'react';
import { OptionContext, StateContext, TimeContext } from './context';
import defaultState, { IState } from './state';

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IState>(defaultState);

  // Controls Time

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

  // Controls Option

  const changeOption = (choice: string): void =>
    setState((prev): IState => ({ ...prev, option: choice }));

  // Controls Timer

  const togglePlay = (): void => {
    setState((prev): IState => ({ ...prev, play: !prev.play }));
  };

  return (
    <StateContext.Provider value={state}>
      <TimeContext.Provider
        value={{
          addTime,
          subtractTime,
          isSession,
          isShort,
          isLong
        }}
      >
        <OptionContext.Provider value={{ changeOption }}>
          {children}
        </OptionContext.Provider>
      </TimeContext.Provider>
    </StateContext.Provider>
  );
};
