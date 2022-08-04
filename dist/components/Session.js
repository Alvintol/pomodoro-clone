import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { isToggled } from '../helpers/helperFunctions';
import { StateContext, TimeContext } from '../state/context';
import Arrow from './Arrow';
const Session = () => {
    const state = useContext(StateContext);
    const time = useContext(TimeContext);
    const { option } = state;
    const sessionClass = isToggled('session', option) +
        ' bg-pink flex flex-row w-full text-center justify-center items-center px-5 capitalize sm:px-10 md:w-1/3 ';
    const handleClick = () => {
        if (option === 'session')
            return null;
        time?.isSession('session');
    };
    return (_jsxs("div", { "data-testid": 'session', id: 'session', className: sessionClass, onClick: handleClick, children: [option === 'session' ? _jsx(Arrow, { id: 'down-session', type: 'DOWN' }) : null, "Session", option === 'session' ? _jsx(Arrow, { id: 'up-session', type: 'UP' }) : null] }));
};
export default Session;
