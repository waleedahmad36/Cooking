"use client";

import React, { useEffect } from "react";
import Navbar from "./Navbar";

const Navbarin: React.FC = () => {
  // Debounce function moved outside useEffect to avoid re-creation on each render
  const debounce = (fn: Function) => {
    let frame: number;

    return (...params: any[]) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        fn(...params);
      });
    };
  };

  useEffect(() => {
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    const debouncedStoreScroll = debounce(storeScroll);

    document.addEventListener("scroll", debouncedStoreScroll, {
      passive: true,
    });

    storeScroll();

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("scroll", debouncedStoreScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Navbarin;
