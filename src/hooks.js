import React, { useCallback, useState, useEffect } from "react";

const noiseSize = 70;
const noiseSizeEnlarged = 95;

export const useHover = () => {
  const setSize = useCallback((size) => {
    document.body.style.setProperty("--cursor-size", `${size}px`);
  }, []);

  const onMouseEnter = useCallback(() => setSize(noiseSizeEnlarged), [setSize]);
  const onMouseLeave = useCallback(() => setSize(noiseSize), [setSize]);

  return {
    onMouseEnter,
    onMouseLeave,
  };
};