import { useEffect, useCallback } from "react";

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(savedCallback, delay);
      return () => clearInterval(id);
    }
  }, [delay, savedCallback]);
};

export default useInterval;
