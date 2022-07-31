interface State {
  minutes: number;
  seconds: number;
  option: string;
  timer: string;
}

const appState: State = {
  minutes: 25,
  seconds: 0,
  option: 'session',
  timer: 'OFF',
};

export default appState;
