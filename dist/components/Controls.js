import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { StateContext } from '../state/context';
import Control from './Control';
const Controls = () => {
    const state = useContext(StateContext);
    const { play } = state;
    const controlsClass = 'flex flex-row justify-center';
    return (_jsxs("div", { "data-testid": 'controls', id: 'controls', className: controlsClass, children: [play ? _jsx(Control, { id: 'PAUSE' }) : _jsx(Control, { id: 'START' }), _jsx(Control, { id: 'RESET' })] }));
};
export default Controls;
