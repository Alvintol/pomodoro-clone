export const isToggled = (id: string, option: string): string =>
  id === option ? ' font-bold justify-around rounded-md underline decoration-solid underline-offset-4 ' : '';

  export const isOneMinute = (minutes: number): string =>
  minutes === 0 ? ' text-red-900 ' : ''; 