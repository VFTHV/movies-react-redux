import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width } = window;

  return { width };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      const timerId = setTimeout(() => {
        setWindowDimensions(getWindowDimensions());
      }, 1000);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
