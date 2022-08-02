import { createContext, useContext, useState } from 'react';
import defaultState from './state';
const StateContext = createContext(defaultState);
export const AddTimeContext = createContext(undefined);
export const useAppState = () => useContext(StateContext);
export const useAddTime = () => useContext(AddTimeContext);
export const StateProvider = ({ children }) => {
    const [state, setState] = useState(defaultState);
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
    return (<StateContext.Provider value={state}>
      <AddTimeContext.Provider value={{ state, addTime, subtractTime }}>
        {children}
      </AddTimeContext.Provider>
    </StateContext.Provider>);
};
