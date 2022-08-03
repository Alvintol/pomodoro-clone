import { useContext } from 'react';
import { StateContext } from '../state/context';
import Control from './Control';
const Controls = () => {
    const state = useContext(StateContext);
    const { play } = state;
    const controlsClass = 'flex flex-row justify-center';
    return (<div data-testid='controls' id='controls' className={controlsClass}>
      {play ? <Control id='PAUSE'/> : <Control id='START'/>}
      <Control id='RESET'/>
    </div>);
};
export default Controls;
