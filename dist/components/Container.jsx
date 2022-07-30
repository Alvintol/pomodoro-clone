import Controls from './Controls';
import Options from './Options';
import Timer from './Timer';
const Container = () => {
    return (<div id='container' className='bg-purple flex flex-col justify-around h-1/2 w-5/6 rounded-lg p-3'>
        <Options />
        <Timer />
        <Controls />
      </div>);
};
export default Container;
