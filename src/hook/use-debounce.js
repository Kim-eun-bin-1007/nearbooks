import { useEffect } from "react";

const useDebounce = ({ type, listener, delay }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener(type, listener);
    }, delay);

    return () => {
      clearTimeout(timer);
      window.removeEventListener(type, listener);
    };
  }, [type, listener, delay]);
};

export default useDebounce;
