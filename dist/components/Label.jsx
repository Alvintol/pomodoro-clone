import { useContext } from 'react';
import { StateContext } from '../state/context';
const Label = () => {
    const state = useContext(StateContext);
    const { option } = state;
    const labelClass = 'font-bold uppercase text-xl';
    return (<div id='label' className={labelClass}>
      {option === 'session' ? "Let's Focus!" : 'Time to enjoy a little break'}
    </div>);
};
export default Label;
