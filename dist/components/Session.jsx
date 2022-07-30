import { useAppState } from '../state/StateProvider';
const Session = () => {
    const state = useAppState();
    return (<div id='session'>Session</div>);
};
export default Session;
