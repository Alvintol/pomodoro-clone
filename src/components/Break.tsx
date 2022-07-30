import Arrow from './Arrow';

interface BreakOption {
  id: string;
}


const Break = ({id}: BreakOption) => {

  const capitalize = (str:string) => {
    const strSplit = str.split('');
    const noFirst = strSplit.splice(1)
    return id[0].toUpperCase() + noFirst.join('');
  } 
  
  return (
    <div
      id={id}
      className='flex flex-row w-full justify-between items-center px-5 sm:w-3/4 md:w-1/6'
    >
      <Arrow id='down-short' type='DOWN' />
      {capitalize(id)}
      <Arrow id='up-short' type='UP' />
    </div>
  );
};

export default Break;
