import { isToggled } from '../helpers/helperFunctions';
import { useAppState } from '../state/StateProvider';

const Session = () => {

  const state = useAppState();
  const {option} = state;

  const sessionClass = 'w-full md:w-1/3 rounded-md ' + isToggled('session', option)

  return (
    <div data-testid='session' id='session' className={sessionClass}>Session</div>
  )
};

export default Session;