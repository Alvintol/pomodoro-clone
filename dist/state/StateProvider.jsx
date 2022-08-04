import { useEffect, useState } from 'react';
import { OptionContext, PlayContext, StateContext, TimeContext, } from './context';
import defaultState from './state';
export const StateProvider = ({ children }) => {
    const [state, setState] = useState(defaultState);
    const { minutes, seconds, option, play, lastBreak, session, short, long } = state;
    // Options
    const changeOption = (choice) => setState((prev) => ({ ...prev, option: choice }));
    // Time
    const addTime = (id) => {
        switch (id) {
            case 'short':
                setState((prev) => ({
                    ...prev,
                    minutes: prev.minutes++,
                    short: prev.short++,
                }));
                break;
            case 'long':
                setState((prev) => ({
                    ...prev,
                    minutes: prev.minutes++,
                    long: prev.long++,
                }));
                break;
            default:
                setState((prev) => ({
                    ...prev,
                    minutes: prev.minutes++,
                    session: prev.session++,
                }));
                break;
        }
    };
    const subtractTime = (id) => {
        switch (id) {
            case 'short':
                setState((prev) => ({
                    ...prev,
                    minutes: prev.minutes--,
                    short: prev.short--,
                }));
                break;
            case 'long':
                setState((prev) => ({
                    ...prev,
                    minutes: prev.minutes--,
                    long: prev.long--,
                }));
                break;
            default:
                setState((prev) => ({
                    ...prev,
                    minutes: prev.minutes--,
                    session: prev.session--,
                }));
                break;
        }
    };
    const isSession = () => setState((prev) => ({ ...prev, minutes: session, seconds: 0 }));
    const isShort = () => setState((prev) => ({ ...prev, minutes: short, seconds: 0 }));
    const isLong = () => setState((prev) => ({ ...prev, minutes: long, seconds: 0 }));
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
                            setState((prev) => ({
                                ...prev,
                                minutes: session,
                                seconds: 0,
                                option: 'session',
                            }));
                        }
                        if (option === 'session') {
                            if (lastBreak === 'long') {
                                setState((prev) => ({
                                    ...prev,
                                    minutes: short,
                                    seconds: 0,
                                    option: 'short',
                                    lastBreak: 'short',
                                }));
                            }
                            else {
                                setState((prev) => ({
                                    ...prev,
                                    minutes: long,
                                    seconds: 0,
                                    option: 'long',
                                    lastBreak: 'long',
                                }));
                            }
                        }
                    }
                }
                else {
                    setState((prev) => ({ ...prev, seconds: prev.seconds-- }));
                }
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [seconds, minutes, option, play, lastBreak, session, short, long]);
    // Controls
    const togglePlay = () => {
        setState((prev) => ({
            ...prev,
            play: !prev.play,
        }));
    };
    const setReset = (option) => {
        let time = 25;
        switch (option) {
            case 'short':
                time = 5;
                break;
            case 'long':
                time = 15;
                break;
            default:
                time = 25;
                break;
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
