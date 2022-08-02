import Container from './components/Container';
import './css/main.css';
import { StateProvider } from './state/StateProvider';

const App = () => {
  const appClass =
    'bg-orange text-center h-screen flex flex-col items-center justify-center';

  return (
    <StateProvider>
      <div data-testid='app' id='app' className={appClass}>
        <Container />
      </div>
    </StateProvider>
  );
};

export default App;
