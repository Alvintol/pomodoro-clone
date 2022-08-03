import { createContext } from 'react';
import defaultState from './state';
export const StateContext = createContext(defaultState);
export const TimeContext = createContext(undefined);
export const OptionContext = createContext(undefined);
export const PlayContext = createContext(undefined);
