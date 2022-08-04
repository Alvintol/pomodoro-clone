import { jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { isOneMinute } from '../helpers/helperFunctions';
import { StateContext } from '../state/context';
const Timer = () => {
    const state = useContext(StateContext);
    const { minutes, seconds } = state;
    const mins = minutes === 0 ? '00' : minutes;
    const secs = seconds === 0 ? '00' : seconds;
    const time = (num) => num.toString().length > 1 ? num : `0${num}`;
    const timerClass = isOneMinute(minutes) +
        ' flex flex-col justify-center h-1/2 font-bold text-[50px] sm:text-[75px] md:text-[125px]';
    return (_jsxs("div", { "data-testid": 'timer', id: 'timer', className: timerClass, children: [time(mins), ":", time(secs)] }));
};
export default Timer;
