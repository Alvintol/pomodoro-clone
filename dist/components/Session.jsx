import { useContext } from 'react';
import { isToggled } from '../helpers/helperFunctions';
import { OptionContext, StateContext, TimeContext } from '../state/context';
import Arrow from './Arrow';
const Session = () => {
    const state = useContext(StateContext);
    const select = useContext(OptionContext);
    const time = useContext(TimeContext);
    const { option } = state;
    const sessionClass = isToggled('session', option) +
        ' bg-pink flex flex-row w-full text-center justify-center items-center px-5 capitalize sm:px-10 md:w-1/3 ';
    const handleClick = () => {
        if (option === 'session')
            return null;
        select?.changeOption('session');
        time?.isSession('session');
    };
    return (<div data-testid='session' id='session' className={sessionClass} onClick={handleClick}>
      {option === 'session' ? (<Arrow id='down-session' type='DOWN' keyTrigger='ArrowDown'/>) : null}
      Session
      {option === 'session' ? (<Arrow id='up-session' type='UP' keyTrigger='ArrowUp'/>) : null}
    </div>);
};
export default Session;
