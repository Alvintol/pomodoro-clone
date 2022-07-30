import Control from './Control';
const Controls = () => {
    const controlsClass = 'flex flex-row justify-center';
    return (<div data-testid='controls' id='controls' className={controlsClass}>
      <Control id='START'/>
      <Control id='PAUSE'/>
      <Control id='RESET'/>
    </div>);
};
export default Controls;
