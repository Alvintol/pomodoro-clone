import Arrow from './Arrow';
const Break = ({ id }) => {
    const capitalize = (str) => {
        const strSplit = str.split('');
        return strSplit.splice(0, 1, id[0].toUpperCase()).join('');
    };
    return (<div id={id} className='flex flex-row w-full justify-between items-center px-5 sm:w-3/4 md:w-1/6'>
      <Arrow id='down-short' type='DOWN'/>
      {capitalize(id)}
      <Arrow id='up-short' type='UP'/>
    </div>);
};
export default Break;
