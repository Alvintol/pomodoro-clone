import { useAppState } from '../state/StateProvider';

const Session = () => {

  const state = useAppState();

  return (
    <div data-testid='session' id='session'>Session</div>
  )
};

export default Session;