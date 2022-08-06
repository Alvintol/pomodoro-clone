  // Adds class names to selected session/break option
export const isToggled = (id: string, option: string): string =>
  id === option
    ? ' font-bold justify-around rounded-md underline decoration-solid underline-offset-4 '
    : '';

  // Adds red text class when remaining time drops below 1 minute
export const isOneMinute = (minutes: number): string =>
  minutes === 0 ? ' text-red-600 ' : '';
