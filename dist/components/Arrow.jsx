import { useContext } from 'react';
const Arrow = ({ id, type }) => {
    const arrowClass = type === 'UP'
        ? 'fa-solid fa-arrow-up-long mr-1 hover:opacity-50'
        : 'fa-solid fa-arrow-down-long mr-1 hover:opacity-50';
    const timeContext = useContext(StateContext);
    const handleClick = () => {
        timeContext?.addTime();
    };
    return (<i data-testid='arrow' id={id} className={arrowClass} onClick={handleClick}></i>);
};
export default Arrow;
