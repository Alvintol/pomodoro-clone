import { useState } from 'react';
import { OptionContext, PlayContext, StateContext, TimeContext, } from './context';
import defaultState from './state';
export const StateProvider = ({ children }) => {
    const [state, setState] = useState(defaultState);
    // Controls Time
    const addTime = () => setState((prev) => ({
        ...prev,
        minutes: prev.minutes++,
    }));
    const subtractTime = () => setState((prev) => ({
        ...prev,
        minutes: prev.minutes--,
    }));
    const isSession = () => setState((prev) => ({ ...prev, minutes: 25 }));
    const isShort = () => setState((prev) => ({ ...prev, minutes: 5 }));
    const isLong = () => setState((prev) => ({ ...prev, minutes: 15 }));
    // Controls Option
    const changeOption = (choice) => setState((prev) => ({ ...prev, option: choice }));
    // Controls Timer
    const togglePlay = () => {
        setState((prev) => ({ ...prev, play: !prev.play }));
    };
    return (<StateContext.Provider value={state}>
      <TimeContext.Provider value={{
            addTime,
            subtractTime,
            isSession,
            isShort,
            isLong,
        }}>
        <OptionContext.Provider value={{ changeOption }}>
          <PlayContext.Provider value={{ togglePlay }}>
            {children}
          </PlayContext.Provider>
        </OptionContext.Provider>
      </TimeContext.Provider>
    </StateContext.Provider>);
};
