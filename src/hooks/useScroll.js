import { useState, useEffect } from 'react';

const useScroll = () => {
  const isClient = typeof window === 'object';

  const [scroll, setScroll] = useState({
    scrollY: isClient ? window.pageYOffset : undefined,
  });

  const listener = () => {
    setScroll(() => ({
      scrollY: window.pageYOffset,
    }));
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return scroll;
};

export default useScroll;
