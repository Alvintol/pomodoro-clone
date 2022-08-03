import { useEffect, useState } from 'react';
import { OptionContext, PlayContext, StateContext, TimeContext, } from './context';
import defaultState from './state';
export const StateProvider = ({ children }) => {
    const [state, setState] = useState(defaultState);
    const { minutes, seconds, play, option } = state;
    // Options
    const changeOption = (choice) => setState((prev) => ({ ...prev, option: choice }));
    // Time
    const addTime = () => setState((prev) => ({
        ...prev,
        minutes: prev.minutes++,
    }));
    const subtractTime = () => setState((prev) => ({
        ...prev,
        minutes: prev.minutes--,
    }));
    const isSession = () => setState((prev) => ({ ...prev, minutes: 25, seconds: 0 }));
    const isShort = () => setState((prev) => ({ ...prev, minutes: 5, seconds: 0 }));
    const isLong = () => setState((prev) => ({ ...prev, minutes: 15, seconds: 0 }));
    useEffect(() => {
        if (play) {
            const interval = setInterval(() => {
                clearInterval(interval);
                if (seconds < 1) {
                    if (minutes >= 1) {
                        setState((prev) => ({
                            ...prev,
                            minutes: prev.minutes--,
                            seconds: 59,
                        }));
                    }
                    else {
                        if (option !== 'session') {
                            changeOption('session');
                            isSession();
                        }
                        if (option === 'session') {
                            changeOption('short');
                            isShort();
                        }
                    }
                }
                else {
                    setState((prev) => ({ ...prev, seconds: prev.seconds-- }));
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [seconds, minutes, option, play]);
    // Controls
    const togglePlay = () => {
        setState((prev) => ({
            ...prev,
            play: !prev.play,
        }));
    };
    const setReset = (option) => {
        let time = 25;
        console.log('test');
        switch (option) {
            case 'short':
                time = 5;
                break;
            case 'long':
                time = 15;
                break;
            default:
                return;
        }
        setState((prev) => ({ ...prev, minutes: time, seconds: 0, play: false }));
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
          <PlayContext.Provider value={{ togglePlay, setReset }}>
            {children}
          </PlayContext.Provider>
        </OptionContext.Provider>
      </TimeContext.Provider>
    </StateContext.Provider>);
};
