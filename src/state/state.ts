export interface IState {
  minutes: number;
  seconds: number;
  option: string;
  play: boolean;
  lastBreak: string;
  session: number;
  short: number;
  long: number
}

export type MinuteContextType = {
  addTime: (id: string) => void;
  subtractTime: (id: string) => void;
  isSession: (id: string) => void;
  isShort: (id: string) => void;
  isLong: (id: string) => void;
};

export type PlayContextType = {
  togglePlay: () => void;
  setReset: (option: string) => void;
};

const defaultState: IState = {
  minutes: 25,
  seconds: 0,
  option: 'session',
  play: false,
  lastBreak: 'long',
  session: 25,
  short: 5, 
  long: 15
};

export default defaultState;
