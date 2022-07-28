import './css/main.css';
const App = () => {
    return (<div id='app' className='text-center h-screen flex flex-col items-center justify-center'>
      <p>Pomodoro Clone</p>
      <div id='container' className='flex flex-col justify-around border border-red-900 h-1/2 w-1/2'>
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
        <div id='timer' className='h-1/2'>Timer</div>
        <div id='controls' className='flex flex-row justify-center'>
        <i id='start' className="fa-solid fa-play m-1"></i>
        <i id='pause' className="fa-solid fa-pause m-1"></i>
        <i id='reset' className="fa-solid fa-rotate m-1"></i>
        </div>
      </div>
    </div>);
};
export default App;
