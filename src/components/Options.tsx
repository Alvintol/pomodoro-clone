import Break from './Break';
import Session from './Session';

const Options = () => {

const optionsClass: string = 'flex flex-col items-center text-center rounded-md mx-3  md:justify-around md:flex-row '

return (
  <div
  data-testid='options'
  id='options'
  className={optionsClass}
>
  <Session />
  <Break id='short' />
  <Break id='long' />
</div>
)
};

export default Options;