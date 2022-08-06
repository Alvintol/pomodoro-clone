import { useContext } from 'react';
import { isToggled } from '../helpers/helperFunctions';
import { StateContext, TimeContext } from '../state/context';
import Arrow from './Arrow';

const Session = () => {
  const state = useContext(StateContext);
  const time = useContext(TimeContext);
  const { option } = state;

  const sessionClass: string =
    isToggled('session', option) +
    ' bg-pink flex flex-row w-full text-center justify-center items-center px-5 capitalize sm:px-10 md:w-1/3 ';

  // Changes app to display session time upon click
  const handleClick = (): void | null => {
    if (option === 'session') return null;
    time?.isSession('session');
  };

  return (
    <div
      data-testid='session'
      id='session'
      className={sessionClass}
      onClick={handleClick}
    >
      {
        // Only render arrow components if the current session/break is active
        option === 'session' ? <Arrow id='down-session' type='DOWN' /> : null
      }
      Session
      {
        // Only render arrow components if the current session/break is active
        option === 'session' ? <Arrow id='up-session' type='UP' /> : null
      }
    </div>
  );
};

export default Session;
