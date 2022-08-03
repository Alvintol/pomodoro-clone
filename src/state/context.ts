import { createContext } from 'react';
import defaultState, {
  IState,
  MinuteContextType,
  OptionContextType,
  PlayContextType,
} from './state';

export const StateContext = createContext<IState>(defaultState);
export const TimeContext = createContext<MinuteContextType | undefined>(
  undefined
);
export const OptionContext = createContext<OptionContextType | undefined>(
  undefined
);
export const PlayContext = createContext<PlayContextType | undefined>(
  undefined
);
