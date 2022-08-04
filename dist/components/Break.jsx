import { useContext } from 'react';
import { isToggled } from '../helpers/helperFunctions';
import { OptionContext, StateContext, TimeContext } from '../state/context';
import Arrow from './Arrow';
const Break = ({ id }) => {
    const state = useContext(StateContext);
    const select = useContext(OptionContext);
    const time = useContext(TimeContext);
    const { option } = state;
    const upID = `up-${id}`;
    const downID = `down-${id}`;
    const breakClass = isToggled(id, option) +
        ' bg-pink flex flex-row w-full text-center justify-center items-center px-5 capitalize sm:px-10 md:w-1/3 ';
    const handleClick = () => {
        if (id === option)
            return null;
        select?.changeOption(id);
        id === 'short' ? time?.isShort(id) : time?.isLong(id);
    };
    return (<div data-testid='break' id={id} className={breakClass} onClick={handleClick}>
      {id === option ? <Arrow id={downID} type='DOWN'/> : null}
      {id}
      {id === option ? <Arrow id={upID} type='UP'/> : null}
    </div>);
};
export default Break;
