import { useAppState } from '../state/StateProvider';

const Timer = () => {
  const state = useAppState();
  const { minutes, seconds } = state;

  const mins: string | number = minutes === 0 ? '00' : minutes;
  const secs: string | number = seconds === 0 ? '00' : seconds;

  const time = (num: string | number) => 
    num.toString().length > 1 ? num : `0${num}`;

  return (
    <div
      id='timer'
      className='flex flex-col justify-center h-1/2 font-bold text-[50px] sm:text-[75px] md:text-[125px]'
    >
      {time(mins)}:{time(secs)}
    </div>
  );
};

export default Timer;
