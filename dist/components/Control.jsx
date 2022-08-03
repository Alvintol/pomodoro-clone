import { useContext } from 'react';
import { PlayContext } from '../state/context';
const Control = ({ id }) => {
    const play = useContext(PlayContext);
    const iconClass = () => {
        switch (id) {
            case 'START':
                return 'fa-solid fa-play mx-2 text-2xl hover:opacity-50';
            case 'PAUSE':
                return 'fa-solid fa-pause mx-2 text-2xl hover:opacity-50';
            case 'RESET':
                return 'fa-solid fa-rotate mx-2 text-2xl hover:opacity-50';
        }
    };
    const handleClick = () => {
        play?.togglePlay();
    };
    return <i data-testid='control' id={id} className={iconClass()} onClick={handleClick}></i>;
};
export default Control;
