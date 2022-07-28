import './css/main.css';
const App = () => {
    return (<div id='app' className='text-center h-screen flex flex-col items-center justify-center'>
      <p>Pomodoro Clone</p>
      <div id='container' className='flex flex-col justify-center border border-red-900 h-1/2 w-1/2'>
        <div id='options' className='flex flex-row justify-around text-center'>
          <div id='session'>Session</div>
          <div id='short' className='flex flex-row'>
            <i id='down-short' className='fa-solid fa-arrow-down-long'></i>
            Short
            <i id='up-short' className='fa-solid fa-arrow-up-long'></i>
          </div>
          <div id='long' className='flex flex-row'>
            <i id='down-long' className='fa-solid fa-arrow-down-long'></i>
            Long
            <i id='up-long' className='fa-solid fa-arrow-up-long'></i>
          </div>
        </div>
        <div id='timer'>Timer</div>
        <div id='start'>Start</div>
        <div id='pause'>Pause</div>
        <div id='reset'>Reset</div>
      </div>
    </div>);
};
export default App;
