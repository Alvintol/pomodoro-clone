export const isToggled = (id, option) => id === option ? ' font-bold justify-around rounded-md underline decoration-solid underline-offset-4 ' : '';
export const isOneMinute = (minutes) => {
    console.log('MINUTES:', minutes);
    return minutes === 0 ? ' text-red-600 ' : '';
};
