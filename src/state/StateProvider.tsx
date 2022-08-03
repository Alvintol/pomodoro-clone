import { createContext, ReactNode, useState } from 'react';
import defaultState, { MinuteContextType, IState } from './state';

export const StateContext = createContext<IState>(defaultState);
export const TimeContext = createContext<MinuteContextType | undefined>(
  undefined
);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IState>(defaultState);

  const addTime = () => {
    console.log('ADDtest');
    setState((prev) => ({
      ...prev,
      minutes: (prev.minutes++),
    }));
  };

  const subtractTime = () => {
    console.log('SUBtest');
    setState((prev) => ({
      ...prev,
      minutes: (prev.minutes--),
    }));
  };

  return (
    <StateContext.Provider value={state}>
      <TimeContext.Provider value={{ addTime, subtractTime }}>
        {children}
      </TimeContext.Provider>
    </StateContext.Provider>
  );
};
