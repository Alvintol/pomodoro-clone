import Arrow from './Arrow';
const Break = ({ id }) => {
    const capitalize = (str) => {
        const strSplit = str.split('');
        const noFirst = strSplit.splice(1);
        return id[0].toUpperCase() + noFirst.join('');
    };
    const arrowClass = 'flex flex-row w-full justify-between items-center px-5 sm:w-3/4 md:w-1/6';
    return (<div data-testid='break' id={id} className={arrowClass}>
      <Arrow id='down-short' type='DOWN'/>
      {capitalize(id)}
      <Arrow id='up-short' type='UP'/>
    </div>);
};
export default Break;
