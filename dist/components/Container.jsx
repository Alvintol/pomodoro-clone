import { useContext } from 'react';
import { StateContext } from '../state/context';
import Controls from './Controls';
import Options from './Options';
import Timer from './Timer';
const Container = () => {
    const state = useContext(StateContext);
    const { option } = state;
    const containerClass = 'bg-purple flex flex-col justify-around h-1/2 w-5/6 rounded-lg p-3';
    return (<div data-testid='container' id='container' className={containerClass}>
      <Options />
      <h1>
      {option === 'session' ? "Let's Focus!" : "Time to enjoy a little break"}
      </h1>
      <Timer />
      <Controls />
    </div>);
};
export default Container;
