import { isToggled } from '../helpers/helperFunctions';
import { useAppState } from '../state/StateProvider';
import Arrow from './Arrow';

interface BreakOption {
  id: string;
}

const Break = ({ id }: BreakOption) => {
  const state = useAppState();
  const { option } = state;

  const capitalize = (str: string) => {
    const strSplit = str.split('');
    const noFirst = strSplit.splice(1);
    return id[0].toUpperCase() + noFirst.join('');
  };

  const breakClass: string =
    'flex flex-row w-full rounded-md justify-between items-center px-5 sm:px-10 md:w-1/3 ' +
    isToggled(id, option);

  return (
    <div data-testid='break' id={id} className={breakClass}>
      <Arrow id='down-short' type='DOWN' />
      {capitalize(id)}
      <Arrow id='up-short' type='UP' />
    </div>
  );
};

export default Break;
