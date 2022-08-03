export interface IState {
  minutes: number;
  seconds: number;
  option: string;
  timer: string;
}

export type MinuteContextType = {
  addTime: () => void;
  subtractTime: () => void;
}

export type OptionContextType = {
  changeOption: () => void;
}

const defaultState: IState = {
  minutes: 25,
  seconds: 0,
  option: 'short',
  timer: 'OFF',
};

export default defaultState;
