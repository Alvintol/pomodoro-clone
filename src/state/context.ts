import { createContext } from 'react';
import defaultState, { IState, MinuteContextType } from './state';

export const StateContext = createContext<IState>(defaultState);
export const TimeContext = createContext<MinuteContextType | undefined>(
  undefined
);