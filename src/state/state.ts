export interface IState {
  minutes: number;
  seconds: number;
  option: string;
  play: boolean;
  lastBreak: string;
}

export type MinuteContextType = {
  addTime: () => void;
  subtractTime: () => void;
  isSession: () => void;
  isShort: () => void;
  isLong: () => void;
};

export type OptionContextType = {
  changeOption: (choice: string) => void;
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
  lastBreak: 'long'
};

export default defaultState;
