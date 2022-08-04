import { useEffect, useRef } from 'react';

const useKey = (key: string, callback: () => void): void => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    const handle = (event: any) => {
      if (event.code === key) {
        callbackRef.current()
      }
    };
    document.addEventListener('keydown', handle);

    return () => document.removeEventListener('keydown', handle)
  }, [key]);
};

export default useKey;
