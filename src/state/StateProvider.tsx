import { ReactNode, useState } from 'react';
import { StateContext, TimeContext } from './context';
import defaultState, { IState } from './state';

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IState>(defaultState);

  const addTime = ():void => {
    setState((prev) => ({
      ...prev,
      minutes: prev.minutes++,
    }));
  };

  const subtractTime = ():void => {
    setState((prev) => ({
      ...prev,
      minutes: prev.minutes--,
    }));
  };

  const changeOption = (choice: string): void => {
    setState((prev)=> ({...prev, option: choice}))
  };

  return (
    <StateContext.Provider value={state}>
      <TimeContext.Provider value={{ addTime, subtractTime }}>
        {children}
      </TimeContext.Provider>
    </StateContext.Provider>
  );
};
