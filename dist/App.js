import { jsx as _jsx } from "react/jsx-runtime";
import Container from './components/Container';
import './css/main.css';
import { StateProvider } from './state/StateProvider';
const App = () => {
    const appClass = 'bg-orange text-center h-screen flex flex-col items-center justify-center';
    return (_jsx(StateProvider, { children: _jsx("div", { "data-testid": 'app', id: 'app', className: appClass, children: _jsx(Container, {}) }) }));
};
export default App;
