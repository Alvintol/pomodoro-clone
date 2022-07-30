const Arrow = ({ id, type }) => {
    const arrowClass = type === 'UP'
        ? 'fa-solid fa-arrow-up-long mr-1 hover:opacity-50'
        : 'fa-solid fa-arrow-down-long mr-1 hover:opacity-50';
    return <i id={id} className={arrowClass}></i>;
};
export default Arrow;
