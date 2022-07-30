import { useAppState } from '../state/StateProvider';

const Timer = () => {

  const state = useAppState()
  const {minutes, seconds } = state;

  return (
    <div
      id='timer'
      className='flex flex-col justify-center h-1/2 font-bold text-[50px] sm:text-[75px] md:text-[125px]'
    >
      {minutes}:{seconds === 0 ? '00' : seconds}
    </div>
  );
};

export default Timer;
