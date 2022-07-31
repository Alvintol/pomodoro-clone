import Arrow from './Arrow';
const Break = ({ id }) => {
    const capitalize = (str) => {
        const strSplit = str.split('');
        const noFirst = strSplit.splice(1);
        return id[0].toUpperCase() + noFirst.join('');
    };
    const breakClass = 'bg-lightBlue flex flex-row w-full justify-between items-center px-5 sm:px-10 md:w-1/3';
    return (<div data-testid='break' id={id} className={breakClass}>
      <Arrow id='down-short' type='DOWN'/>
      {capitalize(id)}
      <Arrow id='up-short' type='UP'/>
    </div>);
};
export default Break;
