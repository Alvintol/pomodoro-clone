import { render, screen } from '@testing-library/react';
import App from './App';
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
    // it('renders Session component', () => {
    //   render(<Session />);
    //   const session = screen.getByTestId('session');
    //   expect(session).toBeInTheDocument();
    // })
    // it('renders Break component', () => {
    //   render(<Break />);
    //   const break = screen.getByTestId('break');
    //   expect(break).toBeInTheDocument();
    // })
    it('renders Timer component', () => {
        render(<Timer />);
        const timer = screen.getByTestId('timer');
        expect(timer).toBeInTheDocument();
    });
    // it('renders Controls component', () => {
    //   render(<Controls />);
    //   const controls = screen.getByTestId('controls');
    //   expect(controls).toBeInTheDocument();
    // })
    // it('renders Control component', () => {
    //   render(<Control />);
    //   const control = screen.getByTestId('control');
    //   expect(control).toBeInTheDocument();
    // })
});
