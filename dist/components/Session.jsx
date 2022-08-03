import { useContext } from 'react';
import { isToggled } from '../helpers/helperFunctions';
import { StateContext } from '../state/StateProvider';
const Session = () => {
    const state = useContext(StateContext);
    const { option } = state;
    const sessionClass = isToggled('session', option) + ' bg-pink w-full md:w-1/3 ';
    return (<div data-testid='session' id='session' className={sessionClass}>Session</div>);
};
export default Session;
