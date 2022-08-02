import { createContext, useContext, useState } from 'react';
import appState from './state';
export const StateContext = createContext(appState);
const AddTimeContext = createContext(undefined);
export const useAppState = () => useContext(StateContext);
export const useAddTime = () => useContext(AddTimeContext);
export const StateProvider = ({ children }) => {
    const [state, setState] = useState(appState);
    const addTime = () => {
        console.log('test');
        setState((prev) => ({
            ...prev,
            minutes: prev.minutes += 1,
        }));
    };
    return (<StateContext.Provider value={state}>
      <AddTimeContext.Provider value={{ state, addTime }}>
      {children}
      </AddTimeContext.Provider>
    </StateContext.Provider>);
};
