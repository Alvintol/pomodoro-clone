import { useEffect, useState } from 'react';
import { OptionContext, PlayContext, StateContext, TimeContext, } from './context';
import { Howl } from 'howler';
import defaultState from './state';
import useKey from '../helpers/eventListener';
export const StateProvider = ({ children }) => {
    const [state, setState] = useState(defaultState);
    const { minutes, seconds, option, play, lastBreak, session, short, long } = state;
    // Sound
    const playSound = () => {
        const sound = new Howl({
            src: [
                'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav',
            ],
            html5: true,
            volume: 0.5,
        });
        sound.play();
    };
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
                        playSound();
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
                time = short;
                break;
            case 'long':
                time = long;
                break;
            default:
                time = session;
                break;
        }
        setState((prev) => ({ ...prev, minutes: time, seconds: 0, play: false }));
    };
    // Keyboard Key Press
    useKey('Escape', (event) => {
        if (event?.key === 'Escape') {
            setReset(option);
        }
    });
    useKey('Space', (event) => {
        if (event?.key === ' ') {
            togglePlay();
        }
    });
    useKey('Enter', (event) => {
        if (event?.key === 'Enter') {
            togglePlay();
        }
    });
    useKey('ArrowUp', (event) => {
        if (event?.key === 'ArrowUp') {
            console.log(event?.key);
            addTime(option);
        }
    });
    useKey('ArrowDown', (event) => {
        if (event?.key === 'ArrowDown') {
            console.log(event?.key);
        }
    });
    useKey('Tab', (event) => {
        if (event?.key === 'Tab') {
            console.log(event?.key);
        }
    });
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
