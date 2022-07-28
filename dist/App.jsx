import './css/main.css';
const App = () => {
    return (<div id='app' className='bg-orange text-center h-screen flex flex-col items-center justify-center'>
      <div id='container' className='bg-purple flex flex-col justify-around h-1/2 w-5/6 rounded-lg p-3'>
        <div id='options' className='bg-pink flex flex-col items-center text-center rounded-md md:justify-around md:flex-row mx-3'>
          <div id='session'>Session</div>
          <div id='short' className='flex flex-row w-full justify-between items-center px-5 sm:w-3/4 md:w-1/6'>
            <i id='down-short' className='fa-solid fa-arrow-down-long mr-1 hover:opacity-50 '></i>
            Short
            <i id='up-short' className='fa-solid fa-arrow-up-long ml-1 hover:opacity-50'></i>
          </div>
          <div id='long' className='flex flex-row w-full justify-between items-center px-5 sm:w-3/4 md:w-1/6'>
            <i id='down-long' className='fa-solid fa-arrow-down-long mr-1 hover:opacity-50'></i>
            Long
            <i id='up-long' className='fa-solid fa-arrow-up-long ml-1 hover:opacity-50'></i>
          </div>
        </div>
        <div id='timer' className='flex flex-col justify-center h-1/2 font-bold text-[50px] sm:text-[75px] md:text-[125px]'>25:00</div>
        <div id='controls' className='flex flex-row justify-center'>
        <i id='start' className="fa-solid fa-play mx-2 text-2xl hover:opacity-50"></i>
        <i id='pause' className="fa-solid fa-pause mx-2 text-2xl hover:opacity-50"></i>
        <i id='reset' className="fa-solid fa-rotate mx-2 text-2xl hover:opacity-50"></i>
        </div>
      </div>
    </div>);
};
export default App;
