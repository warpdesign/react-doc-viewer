import { useEffect, useState } from "react";

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: ReturnType<typeof setTimeout>
  return function(...args: any[]) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
          func(...args)
      }, wait)
  }
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useEffect(() => {
    const handler = debounce(function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, 200)

    window.addEventListener("resize", handler)

    return () => window.removeEventListener("resize", handler)
  }, []);

  return windowSize;
};
