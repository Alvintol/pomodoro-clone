import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { PlayContext, StateContext } from '../state/context';
const Control = ({ id }) => {
    const state = useContext(StateContext);
    const play = useContext(PlayContext);
    const { option } = state;
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
        id === 'RESET' ? play?.setReset(option) : play?.togglePlay();
    };
    return (_jsx("i", { "data-testid": 'control', id: id, className: iconClass(), onClick: handleClick }));
};
export default Control;
