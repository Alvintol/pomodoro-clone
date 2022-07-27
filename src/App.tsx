const App = () => {
  return (
    <div className='app'>
      <div id='container'>
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
          <div id='timer'>
            Timer
          </div>
          <div id='start'>
            Start
          </div>
          <div id='pause'>
            Pause
          </div>
          <div id='reset'>
            Reset
          </div>         
        </div>
      </div>
    </div>
  );
};

export default App;
