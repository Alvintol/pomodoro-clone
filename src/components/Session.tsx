import { useContext } from 'react';
import { isToggled } from '../helpers/helperFunctions';
import { StateContext } from '../state/context';

const Session = () => {

  const state = useContext(StateContext)
  const {option} = state;

  const sessionClass: string = isToggled('session', option) + ' bg-pink w-full md:w-1/3 ';

  return (
    <div data-testid='session' id='session' className={sessionClass}>Session</div>
  )
};

export default Session;