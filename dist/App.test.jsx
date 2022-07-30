import { render, screen } from '@testing-library/react';
import App from './App';
import Controls from './components/Controls';
import Session from './components/Session';
import Timer from './components/Timer';
describe('Components', () => {
    it('renders App component', () => {
        render(<App />);
        const app = screen.getByTestId('app');
        expect(app).toBeInTheDocument();
    });
    // it('renders Container component', () => {
    //   render(<Container />);
    //   const container = screen.getByTestId('container');
    //   expect(container).toBeInTheDocument();
    // })
    // it('renders Options component', () => {
    //   render(<Options />);
    //   const options = screen.getByTestId('options');
    //   expect(options).toBeInTheDocument();
    // })
    it('renders Session component', () => {
        render(<Session />);
        const session = screen.getByTestId('session');
        expect(session).toBeInTheDocument();
    });
    // it('renders Break component', () => {
    //   render(<Break />);
    //   const break = screen.getByTestId('break');
    //   expect(break).toBeInTheDocument();
    // })
    // it('renders Arrow component', () => {
    //   render(<Arrow />);
    //   const arrow = screen.getByTestId('arrow');
    //   expect(arrow).toBeInTheDocument();
    // })
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
    // it('renders Start component', () => {
    //   render(<Control />);
    //   const start = screen.getByTestId('START');
    //   expect(start).toBeInTheDocument();
    // })
});
