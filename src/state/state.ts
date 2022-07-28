interface State {
  min: number;
  seconds: number;
  option: string;
  timer: string;
}

const appState: State = {
  min: 25,
  seconds: 0,
  option: 'SESSION',
  timer: 'OFF',
};

export default appState;
