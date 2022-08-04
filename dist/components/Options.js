import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Break from './Break';
import Session from './Session';
const Options = () => {
    const optionsClass = 'flex flex-col items-center text-center rounded-md mx-3  md:justify-around md:flex-row ';
    return (_jsxs("div", { "data-testid": 'options', id: 'options', className: optionsClass, children: [_jsx(Session, {}), _jsx(Break, { id: 'short' }), _jsx(Break, { id: 'long' })] }));
};
export default Options;
