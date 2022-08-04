import { useEffect, useRef } from 'react';

const useKey = (key:any, callback:any) => {

  const callbackRef = useRef(callback);

  useEffect(() => callbackRef.current = callback)

  useEffect(() => {
    const handle = (event:any) => {
      if (event.code === key) {
        callbackRef.current(event)
      }
    }
    document.addEventListener('keydown', handle)

    return () => document.removeEventListener('keydown', handle)
  }, [key])
};

export default useKey;