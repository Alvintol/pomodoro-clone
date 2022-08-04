import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Controls from './Controls';
import Label from './Label';
import Options from './Options';
import Timer from './Timer';
const Container = () => {
    const containerClass = 'bg-purple flex flex-col justify-around h-1/2 w-5/6 rounded-lg p-3';
    return (_jsxs("div", { "data-testid": 'container', id: 'container', className: containerClass, children: [_jsx(Options, {}), _jsx(Label, {}), _jsx(Timer, {}), _jsx(Controls, {})] }));
};
export default Container;
