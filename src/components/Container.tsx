import Controls from './Controls';
import Label from './Label';
import Options from './Options';
import Timer from './Timer';

const Container = () => {

  const containerClass: string =
    'bg-purple flex flex-col justify-around h-1/2 w-5/6 rounded-lg p-3';

  return (
    <div data-testid='container' id='container' className={containerClass}>
      <Options />
      <Label />
      <Timer />
      <Controls />
    </div>
  );
};

export default Container;
