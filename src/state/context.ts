import { createContext } from 'react';
import defaultState, {
  IState,
  MinuteContextType,
  PlayContextType,
} from './state';

export const StateContext = createContext<IState>(defaultState);
export const TimeContext = createContext<MinuteContextType | undefined>(
  undefined
);
export const PlayContext = createContext<PlayContextType | undefined>(
  undefined
);
