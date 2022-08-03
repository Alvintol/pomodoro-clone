import { useState } from 'react';
import { OptionContext, StateContext, TimeContext } from './context';
import defaultState from './state';
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
        <OptionContext.Provider value={{ changeOption }}>
          {children}
        </OptionContext.Provider>
      </TimeContext.Provider>
    </StateContext.Provider>);
};
