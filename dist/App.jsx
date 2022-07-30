import Container from './components/Container';
import './css/main.css';
const App = () => {
    return (<div data-testid='app' id='app' className='bg-orange text-center h-screen flex flex-col items-center justify-center'>
      <Container />
    </div>);
};
export default App;
