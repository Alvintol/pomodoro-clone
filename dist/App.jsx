import Container from './components/Container';
import './css/main.css';
const App = () => {
    const appClass = 'bg-orange text-center h-screen flex flex-col items-center justify-center';
    return (<div data-testid='app' id='app' className={appClass}>
      <Container />
    </div>);
};
export default App;
