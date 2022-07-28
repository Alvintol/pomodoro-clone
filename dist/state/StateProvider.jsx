import { createContext, useContext, useState } from 'react';
import appState from './state';
const StateContext = createContext(appState);
export const useAppState = () => useContext(StateContext);
export const StateProvider = ({ children }) => {
    const [state, setState] = useState(appState);
    return (<StateContext.Provider value={state}>
    {children}
    </StateContext.Provider>);
};
