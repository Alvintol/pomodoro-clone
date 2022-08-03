import { createContext, useState } from 'react';
import defaultState from './state';
export const StateContext = createContext(defaultState);
export const TimeContext = createContext(undefined);
export const StateProvider = ({ children }) => {
    const [state, setState] = useState(defaultState);
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
    return (<StateContext.Provider value={state}>
      <TimeContext.Provider value={{ addTime, subtractTime }}>
        {children}
      </TimeContext.Provider>
    </StateContext.Provider>);
};
