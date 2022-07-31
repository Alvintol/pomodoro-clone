import { useAppState } from '../state/StateProvider';

const Session = () => {

  const state = useAppState();

  const sessionClass = 'w-full bg-lightBlue md:w-1/3'

  return (
    <div data-testid='session' id='session' className={sessionClass}>Session</div>
  )
};

export default Session;