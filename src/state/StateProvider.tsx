import { createContext, ReactNode, useContext, useState } from 'react';
import appState, { IState, StateContextType } from './state';

export const StateContext = createContext(appState);
const AddTimeContext = createContext<StateContextType | undefined>(undefined)

export const useAppState = () => useContext(StateContext);
export const useAddTime = () => useContext(AddTimeContext) as StateContextType;

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IState>(appState);

  const addTime = () => {
    console.log('test');
    setState((prev) => ({
      ...prev,
      minutes: prev.minutes += 1,
    }));
  };

  return (
    <StateContext.Provider value={state}>
      <AddTimeContext.Provider value={{ state, addTime }}>
      {children}
      </AddTimeContext.Provider>
    </StateContext.Provider>
  );
};
