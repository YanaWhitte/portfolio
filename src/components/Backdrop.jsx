import React, { useEffect, useRef } from "react";

const timeoutTime = 1500;
const transitionChangeTimeout = 2000;

const Backdrop = ({ width, height }) => {
  const ref = useRef(null)
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.style.setProperty("--bg-brightness", 1);
    }, timeoutTime);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.body.style.setProperty("--hue-rotation-transition-delay", "0.8s");
    }, transitionChangeTimeout);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty("--height", '100vh')//`${height * 1.04}px`)
    }
  }, [height])

  return (
    <div
      ref={ref}
      className="app-backdrop hue-rotation hue-rotation-brightness-filter"
    />
  );
};

export default Backdrop;
