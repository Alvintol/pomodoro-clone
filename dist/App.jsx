import './css/main.css';
const App = () => {
    return (<div id='app' className='text-center h-screen flex flex-col items-center justify-center'>
      <p>Pomodoro Clone</p>
      <div id='container' className='flex flex-column justify-center border border-red-900 h-1/2 w-1/2'>
        <div id='options'>
          <div id='session'>Session</div>
          <div id='short'>
            <div id='down-short'></div>
            Short
            <div id='up-short'></div>
          </div>
          <div id='long'>
            <div id='down-long'></div>
            Long
            <div id='up-long'></div>
          </div>
          <div id='timer'>Timer</div>
          <div id='start'>Start</div>
          <div id='pause'>Pause</div>
          <div id='reset'>Reset</div>
        </div>
      </div>
    </div>);
};
export default App;
