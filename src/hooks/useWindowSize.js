import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const desktopMinWidth = 769;
  const isClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
    isDesktop: false,
  });

  function getSize() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      isDesktop: window.innerWidth > desktopMinWidth,
    };
  }

  useEffect(() => {
    if (!isClient) return false;

    const handleResize = () => setWindowSize(getSize());

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
