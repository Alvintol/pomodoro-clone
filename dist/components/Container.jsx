import Controls from './Controls';
import Options from './Options';
import Timer from './Timer';
const Container = () => {
    const containerClass = 'bg-purple flex flex-col justify-around h-1/2 w-5/6 rounded-lg p-3';
    return (<div id='container' className={containerClass}>
        <Options />
        <Timer />
        <Controls />
      </div>);
};
export default Container;
