import { useContext } from 'react';
import { isToggled } from '../helpers/helperFunctions';
import { StateContext } from '../state/StateProvider';
const Session = () => {
    const state = useContext(StateContext);
    const { option } = state;
    const sessionClass = 'w-full md:w-1/3 rounded-md ' + isToggled('session', option);
    return (<div data-testid='session' id='session' className={sessionClass}>Session</div>);
};
export default Session;
