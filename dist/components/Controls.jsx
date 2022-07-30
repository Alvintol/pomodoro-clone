import Control from './Control';
const Controls = () => {
    return (<div id='controls' className='flex flex-row justify-center'>
    <Control id='START'/>
    <Control id='PAUSE'/>
    <Control id='RESET'/>
  </div>);
};
export default Controls;
