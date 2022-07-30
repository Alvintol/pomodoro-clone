import Arrow from './components/Arrow';
import Control from './components/Control';
import Session from './components/Session';
import Timer from './components/Timer';
import './css/main.css';
const App = () => {
    return (<div data-testid='app' id='app' className='bg-orange text-center h-screen flex flex-col items-center justify-center'>
      <div id='container' className='bg-purple flex flex-col justify-around h-1/2 w-5/6 rounded-lg p-3'>
        <div id='options' className='bg-pink flex flex-col items-center text-center rounded-md md:justify-around md:flex-row mx-3'>
          <Session />
          <div id='short' className='flex flex-row w-full justify-between items-center px-5 sm:w-3/4 md:w-1/6'>
            <Arrow id='down-short' type='DOWN'/>
            Short
            <Arrow id='up-short' type='UP'/>
          </div>
          <div id='long' className='flex flex-row w-full justify-between items-center px-5 sm:w-3/4 md:w-1/6'>
            <Arrow id='down-long' type='DOWN'/>
            Long
            <Arrow id='up-long' type='UP'/>
          </div>
        </div>
        <Timer />
        <div id='controls' className='flex flex-row justify-center'>
          <Control id='START'/>
          <Control id='PAUSE'/>
          <Control id='RESET'/>
        </div>
      </div>
    </div>);
};
export default App;
