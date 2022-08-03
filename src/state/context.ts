import { createContext } from 'react';
import defaultState, {
  IState,
  MinuteContextType,
  OptionContextType,
} from './state';

export const StateContext = createContext<IState>(defaultState);
export const TimeContext = createContext<MinuteContextType | undefined>(
  undefined
);
export const OptionContext = createContext<OptionContextType | undefined>(
  undefined
);
