import Break from './components/Break';
import Controls from './components/Controls';
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
        <div
          id='options'
          className='bg-pink flex flex-col items-center text-center rounded-md md:justify-around md:flex-row mx-3'
        >
          <Session />
          <Break id='short' />
          <Break id='long' />
        </div>
        <Timer />
        <Controls />
      </div>
    </div>
  );
};

export default App;
