import { render, screen } from '@testing-library/react';
import App from './App';
import Arrow from './components/Arrow';
import Break from './components/Break';
import Container from './components/Container';
import Control from './components/Control';
import Controls from './components/Controls';
import Options from './components/Options';
import Session from './components/Session';
import Timer from './components/Timer';
import { isToggled } from './helpers/helperFunctions';
describe('Components', () => {
    it('renders App component', () => {
        render(<App />);
        const app = screen.getByTestId('app');
        expect(app).toBeInTheDocument();
    });
    it('renders Container component', () => {
        render(<Container />);
        const container = screen.getByTestId('container');
        expect(container).toBeInTheDocument();
    });
    it('renders Options component', () => {
        render(<Options />);
        const options = screen.getByTestId('options');
        expect(options).toBeInTheDocument();
    });
    it('renders Session component', () => {
        render(<Session />);
        const session = screen.getByTestId('session');
        expect(session).toBeInTheDocument();
    });
    it('renders Break component', () => {
        render(<Break id='test'/>);
        const breakTest = screen.getByTestId('break');
        expect(breakTest).toBeInTheDocument();
    });
    it('renders Arrow component', () => {
        render(<Arrow id='test' type='test'/>);
        const arrow = screen.getByTestId('arrow');
        expect(arrow).toBeInTheDocument();
    });
    it('renders Timer component', () => {
        render(<Timer />);
        const timer = screen.getByTestId('timer');
        expect(timer).toBeInTheDocument();
    });
    it('renders Controls component', () => {
        render(<Controls />);
        const controls = screen.getByTestId('controls');
        expect(controls).toBeInTheDocument();
    });
    it('renders Control component', () => {
        render(<Control id='test'/>);
        const start = screen.getByTestId('control');
        expect(start).toBeInTheDocument();
    });
});
describe('Helpers', () => {
    it('returns true if toggled', () => {
        const state = {
            option: 'session'
        };
        const id = 'session';
        expect(isToggled(id, state.option)).toBeTruthy();
    });
});
