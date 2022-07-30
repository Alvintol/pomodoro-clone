import { useAppState } from '../state/StateProvider';
const Timer = () => {
    const state = useAppState();
    const { minutes, seconds } = state;
    const mins = minutes === 0 ? '00' : minutes;
    const secs = seconds === 0 ? '00' : seconds;
    const time = (num) => num.toString().length > 1 ? num : `0${num}`;
    const timerClass = 'flex flex-col justify-center h-1/2 font-bold text-[50px] sm:text-[75px] md:text-[125px]';
    return (<div data-testid='timer' id='timer' className={timerClass}>
      {time(mins)}:{time(secs)}
    </div>);
};
export default Timer;
