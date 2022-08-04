import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { StateContext } from '../state/context';
const Label = () => {
    const state = useContext(StateContext);
    const { option } = state;
    const labelClass = 'text-blue drop-shadow-sm font-bold uppercase text-xl';
    return (_jsx("div", { "data-testid": 'label', id: 'label', className: labelClass, children: option === 'session' ? "Let's Focus!" : 'Time to enjoy a little break' }));
};
export default Label;
