const stateReducer = (state, action) => {
    switch (action) {
        case 'increment': return state.minutes++;
        case 'decrement': return state.minutes--;
    }
};
export default stateReducer;
