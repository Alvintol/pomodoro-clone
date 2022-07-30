import Break from './components/Break';
import Controls from './components/Controls';
import Options from './components/Options';
import Session from './components/Session';
import Timer from './components/Timer';
import './css/main.css';

const App = () => {
  return (
    <div
      data-testid='app'
      id='app'
      className='bg-orange text-center h-screen flex flex-col items-center justify-center'
    >
      <div
        id='container'
        className='bg-purple flex flex-col justify-around h-1/2 w-5/6 rounded-lg p-3'
      >
        <Options />
        <Timer />
        <Controls />
      </div>
    </div>
  );
};

export default App;
