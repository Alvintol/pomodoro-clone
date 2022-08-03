import { useContext } from 'react';
import { StateContext, TimeContext } from '../state/context';

interface arrowBtn {
  id: string;
  type: string;
}

const Arrow = ({ id, type }: arrowBtn) => {
  const state = useContext(StateContext);
  const timeContext = useContext(TimeContext);

  const defaultClass = 'fa-solid mr-1 hover:opacity-50';
  const arrowClass =
    type === 'UP'
      ? ' fa-arrow-up-long ' + defaultClass
      : ' fa-arrow-down-long ' + defaultClass;

  const handleClick = (): void | null => {
    return type === 'UP'
      ? timeContext?.addTime()
      : state.minutes > 1
      ? timeContext?.subtractTime()
      : null;
  };

  return (
    <i
      data-testid='arrow'
      id={id}
      className={arrowClass}
      onClick={handleClick}
    ></i>
  );
};

export default Arrow;
