import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import App from './App';
import Arrow from './components/Arrow';
import Break from './components/Break';
import Container from './components/Container';
import Control from './components/Control';
import Controls from './components/Controls';
import Label from './components/Label';
import Options from './components/Options';
import Session from './components/Session';
import Timer from './components/Timer';
import { isToggled } from './helpers/helperFunctions';
describe('Components', () => {
    it('renders App component', () => {
        render(_jsx(App, {}));
        const app = screen.getByTestId('app');
        expect(app).toBeInTheDocument();
    });
    it('renders Container component', () => {
        render(_jsx(Container, {}));
        const container = screen.getByTestId('container');
        expect(container).toBeInTheDocument();
    });
    it('renders Options component', () => {
        render(_jsx(Options, {}));
        const options = screen.getByTestId('options');
        expect(options).toBeInTheDocument();
    });
    it('renders Session component', () => {
        render(_jsx(Session, {}));
        const session = screen.getByTestId('session');
        expect(session).toBeInTheDocument();
    });
    it('renders Break component', () => {
        render(_jsx(Break, { id: 'test' }));
        const breakTest = screen.getByTestId('break');
        expect(breakTest).toBeInTheDocument();
    });
    it('renders Arrow component', () => {
        render(_jsx(Arrow, { id: 'test', type: 'test' }));
        const arrow = screen.getByTestId('arrow');
        expect(arrow).toBeInTheDocument();
    });
    it('renders Label component', () => {
        render(_jsx(Label, {}));
        const label = screen.getByTestId('label');
        expect(label).toBeInTheDocument();
    });
    it('renders Timer component', () => {
        render(_jsx(Timer, {}));
        const timer = screen.getByTestId('timer');
        expect(timer).toBeInTheDocument();
    });
    it('renders Controls component', () => {
        render(_jsx(Controls, {}));
        const controls = screen.getByTestId('controls');
        expect(controls).toBeInTheDocument();
    });
    it('renders Control component', () => {
        render(_jsx(Control, { id: 'test' }));
        const start = screen.getByTestId('control');
        expect(start).toBeInTheDocument();
    });
});
const state = {
    minutes: 25,
    seconds: 0,
    option: 'session',
    timer: 'OFF',
};
// describe('State Provider', () => {
//   it('adds time to minutes state', ()=> {
//     const addTime = () => {
//       setState(prev => ({...prev, minutes: prev.minutes++}))
//     }
//   })
// })
describe('Helpers', () => {
    it('returns true if toggled', () => {
        const id = 'session';
        expect(isToggled(id, state.option)).toBeTruthy();
    });
});
