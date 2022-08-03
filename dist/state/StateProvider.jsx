import { createContext, useState } from 'react';
import defaultState from './state';
export const StateContext = createContext(defaultState);
export const TimeContext = createContext(undefined);
export const StateProvider = ({ children }) => {
    const [state, setState] = useState(defaultState);
    const addTime = () => {
        setState((prev) => ({
            ...prev,
            minutes: prev.minutes++,
        }));
    };
    const subtractTime = () => {
        setState((prev) => ({
            ...prev,
            minutes: prev.minutes--,
        }));
    };
    const changeOption = (choice) => {
        setState((prev) => ({ ...prev, option: choice }));
    };
    return (<StateContext.Provider value={state}>
      <TimeContext.Provider value={{ addTime, subtractTime }}>
        {children}
      </TimeContext.Provider>
    </StateContext.Provider>);
};
