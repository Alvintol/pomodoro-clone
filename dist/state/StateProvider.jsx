import { createContext, useContext, useState } from 'react';
import appState from './state';
const StateContext = createContext(appState);
const AddTimeContext = createContext({});
export const useAppState = () => useContext(StateContext);
export const useAddTime = () => useContext(AddTimeContext);
export const StateProvider = ({ children }) => {
    const [state, setState] = useState(appState);
    const addTime = () => {
        setState((prev) => ({ ...prev, minutes: prev.minutes++ }));
    };
    return (<StateContext.Provider value={state}>
      <AddTimeContext.Provider value={addTime}>
        {children}
        </AddTimeContext.Provider>
    </StateContext.Provider>);
};
