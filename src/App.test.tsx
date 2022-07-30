import { render, screen } from '@testing-library/react';
import App from './App';
import Timer from './components/Timer';


describe('Components', () => {
  
  it('renders App component', () => {
    render(<App />);
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
  })
  
  it('renders Timer component', () => {
    render(<Timer />);
    const timer = screen.getByTestId('timer');
    expect(timer).toBeInTheDocument();
  })


});
