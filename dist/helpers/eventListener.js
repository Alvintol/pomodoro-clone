import { useEffect, useRef } from 'react';
const useKey = (key, callback) => {
    const callbackRef = useRef(callback);
    useEffect(() => {
        const handle = (event) => {
            if (event.code === key) {
                callbackRef.current();
            }
        };
        document.addEventListener('keydown', handle);
        return () => document.removeEventListener('keydown', handle);
    }, [key]);
};
export default useKey;
