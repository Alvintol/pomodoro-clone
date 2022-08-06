import { useContext } from 'react';
import { isToggled } from '../helpers/helperFunctions';
import { StateContext, TimeContext } from '../state/context';
import Arrow from './Arrow';

interface BreakOption {
  id: string;
}

const Break = ({ id }: BreakOption) => {
  const state = useContext(StateContext);
  const time = useContext(TimeContext);
  const { option } = state;

  const upID = `up-${id}`;
  const downID = `down-${id}`;

  const breakClass: string =
    isToggled(id, option) +
    ' bg-pink flex flex-row w-full text-center justify-center items-center px-5 capitalize sm:px-10 md:w-1/3 ';

  // Changes app to display to short/long break time upon button click
  const handleClick = (): void | null => {
    if (id === option) return null;
    id === 'short' ? time?.isShort(id) : time?.isLong(id);
  };

  return (
    <div
      data-testid='break'
      id={id}
      className={breakClass}
      onClick={handleClick}
    >
      {
        // Only render arrow components if the current session/break is active
        id === option ? <Arrow id={downID} type='DOWN' /> : null
      }
      {id} Break
      {
        // Only render arrow components if the current session/break is active
        id === option ? <Arrow id={upID} type='UP' /> : null
      }
    </div>
  );
};

export default Break;
