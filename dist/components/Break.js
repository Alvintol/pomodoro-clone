import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { isToggled } from '../helpers/helperFunctions';
import { StateContext, TimeContext } from '../state/context';
import Arrow from './Arrow';
const Break = ({ id }) => {
    const state = useContext(StateContext);
    const time = useContext(TimeContext);
    const { option } = state;
    const upID = `up-${id}`;
    const downID = `down-${id}`;
    const breakClass = isToggled(id, option) +
        ' bg-pink flex flex-row w-full text-center justify-center items-center px-5 capitalize sm:px-10 md:w-1/3 ';
    const handleClick = () => {
        if (id === option)
            return null;
        id === 'short' ? time?.isShort(id) : time?.isLong(id);
    };
    return (_jsxs("div", { "data-testid": 'break', id: id, className: breakClass, onClick: handleClick, children: [id === option ? _jsx(Arrow, { id: downID, type: 'DOWN' }) : null, id, " Break", id === option ? _jsx(Arrow, { id: upID, type: 'UP' }) : null] }));
};
export default Break;
