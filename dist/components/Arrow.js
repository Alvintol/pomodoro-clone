import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { StateContext, TimeContext } from '../state/context';
const Arrow = ({ id, type }) => {
    const state = useContext(StateContext);
    const timeContext = useContext(TimeContext);
    const { minutes, option } = state;
    const defaultClass = 'fa-solid mr-1 hover:opacity-50';
    const arrowClass = type === 'UP'
        ? ' fa-arrow-up-long ' + defaultClass
        : ' fa-arrow-down-long ' + defaultClass;
    const handleClick = () => {
        return type === 'UP'
            ? timeContext?.addTime(option)
            : minutes > 1
                ? timeContext?.subtractTime(option)
                : null;
    };
    return (_jsx("i", { "data-testid": 'arrow', id: id, className: arrowClass, onClick: handleClick }));
};
export default Arrow;
