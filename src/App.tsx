import './css/main.css';

const App = () => {
  return (
    <div
      id='app'
      className='text-center h-screen flex flex-col items-center justify-center'
    >
      <p>Pomodoro Clone</p>
      <div
        id='container'
        className='flex flex-col justify-around border border-red-900 h-1/2 w-1/2'
      >
        <div id='options' className='flex flex-row justify-around text-center'>
          <div id='session'>Session</div>
          <div id='short' className='flex flex-row items-center'>
            <i id='down-short' className='fa-solid fa-arrow-down-long mr-1 hover:opacity-50'></i>
            Short
            <i id='up-short' className='fa-solid fa-arrow-up-long ml-1 hover:opacity-50'></i>
          </div>
          <div id='long' className='flex flex-row items-center'>
            <i id='down-long' className='fa-solid fa-arrow-down-long mr-1 hover:opacity-50'></i>
            Long
            <i id='up-long' className='fa-solid fa-arrow-up-long ml-1 hover:opacity-50'></i>
          </div>
        </div>
        <div id='timer' className='flex flex-col justify-center h-1/2 text-[50px] sm:text-[75px] md:text-[125px]'>25:00</div>
        <div id='controls' className='flex flex-row justify-center'>
        <i id='start' className="fa-solid fa-play m-1 hover:opacity-50"></i>
        <i id='pause' className="fa-solid fa-pause m-1 hover:opacity-50"></i>
        <i id='reset' className="fa-solid fa-rotate m-1 hover:opacity-50"></i>
        </div>
      </div>
    </div>
  );
};

export default App;
