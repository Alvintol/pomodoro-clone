import { useContext } from 'react';
import { isToggled } from '../helpers/helperFunctions';
import { OptionContext, StateContext } from '../state/context';

const Session = () => {

  const state = useContext(StateContext);
  const select = useContext(OptionContext);
  const {option} = state;

  const sessionClass: string = isToggled('session', option) + ' bg-pink w-full md:w-1/3 ';

  const handleClick = (): void => {
    select?.changeOption('session');
    
  };

  return (
    <div 
    data-testid='session' 
    id='session' 
    className={sessionClass}
    onClick={handleClick}
    >Session</div>
  )
};

export default Session;