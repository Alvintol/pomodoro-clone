import { createContext, ReactNode, useContext, useState } from 'react';
import defaultState, { MinuteContextType, IState } from './state';

const StateContext = createContext<IState>(defaultState);
export const TimeContext = createContext<MinuteContextType | undefined>(
  undefined
);

export const useAppState = () => useContext(StateContext);
export const useAddTime = () => useContext(TimeContext);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IState>(defaultState);

  const addTime = () => {
    console.log('ADDtest');
    setState((prev) => ({
      ...prev,
      minutes: (prev.minutes += 1),
    }));
  };

  const subtractTime = () => {
    console.log('SUBtest');
    setState((prev) => ({
      ...prev,
      minutes: (prev.minutes -= 1),
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
