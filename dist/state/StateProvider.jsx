import { useCallback, useEffect, useState } from 'react';
import { PlayContext, StateContext, TimeContext } from './context';
import { Howl } from 'howler';
import defaultState from './state';
import useKey from '../helpers/eventListener';
export const StateProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);
  const { minutes, seconds, option, play, lastBreak, session, short, long } =
    state;
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
  const isSession = useCallback(
    () =>
      setState((prev) => ({
        ...prev,
        minutes: session,
        seconds: 0,
        option: 'session',
      })),
    [session]
  );
  const isShort = useCallback(
    () =>
      setState((prev) => ({
        ...prev,
        minutes: short,
        seconds: 0,
        option: 'short',
        lastBreak: 'short',
      })),
    [short]
  );
  const isLong = useCallback(
    () =>
      setState((prev) => ({
        ...prev,
        minutes: long,
        seconds: 0,
        option: 'long',
        lastBreak: 'long',
      })),
    [long]
  );
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
          } else {
            playSound();
            if (option !== 'session') {
              isSession();
            }
            if (option === 'session') {
              if (lastBreak === 'long') {
                isShort();
              } else {
                isLong();
              }
            }
          }
        } else {
          setState((prev) => ({ ...prev, seconds: prev.seconds-- }));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [
    seconds,
    minutes,
    option,
    play,
    lastBreak,
    session,
    short,
    long,
    isSession,
    isShort,
    isLong,
  ]);
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
      addTime(option);
    }
  });
  useKey('ArrowDown', (event) => {
    if (event?.key === 'ArrowDown') {
      subtractTime(option);
    }
  });
  useKey('ArrowLeft', (event) => {
    if (event?.key === 'ArrowLeft') {
      switch (option) {
        case 'short':
          isSession();
          break;
        case 'long':
          isShort();
          break;
        default:
          isLong();
          break;
      }
    }
  });
  useKey('ArrowRight', (event) => {
    if (event?.key === 'ArrowRight') {
      switch (option) {
        case 'short':
          isLong();
          break;
        case 'long':
          isSession();
          break;
        default:
          isShort();
          break;
      }
    }
  });
  useKey('Tab', (event) => {
    if (event?.key === 'Tab') {
      event.preventDefault();
      switch (option) {
        case 'short':
          isLong();
          break;
        case 'long':
          isSession();
          break;
        default:
          isShort();
          break;
      }
    }
  });
  return (
    <StateContext.Provider value={state}>
      <TimeContext.Provider
        value={{
          addTime,
          subtractTime,
          isSession,
          isShort,
          isLong,
        }}
      >
        <PlayContext.Provider value={{ togglePlay, setReset }}>
          {children}
        </PlayContext.Provider>
      </TimeContext.Provider>
    </StateContext.Provider>
  );
};
