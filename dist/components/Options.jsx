import Break from './Break';
import Session from './Session';
const Options = () => {
    const optionsClass = 'bg-pink flex flex-col items-center text-center rounded-md md:justify-around md:flex-row mx-3';
    return (<div data-testid='options' id='options' className={optionsClass}>
  <Session />
  <Break id='short'/>
  <Break id='long'/>
    </div>);
};
export default Options;
