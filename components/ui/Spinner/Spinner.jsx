"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Spinner.module.css";

export default function Spinner({ isInfinite = true, size = "md" }) {
  const pathRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !pathRefs.current.includes(el)) {
      pathRefs.current.push(el);
    }
  };

  useEffect(() => {
    pathRefs.current.forEach((path) => {
      if (path && path.getTotalLength) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      }
    });
  }, []);

  return (
    <div
      className={`${styles.spinnerWrapper} ${isInfinite ? styles.infinite : styles.once} ${styles[size]}`}
    >
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 1.5,
        }}
      >
        <path
          ref={addToRefs}
          className={styles.animationLayer}
          d="M32 54S6 38.5 6 21.5C6 12.4 13.2 6 21.3 6 26.5 6 30.4 8.7 32 12.4 33.6 8.7 37.5 6 42.7 6 50.8 6 58 12.4 58 21.5 58 38.5 32 54 32 54Z"
          style={{ strokeWidth: "2.3px" }}
        />

        <path
          ref={addToRefs}
          className={`${styles.animationLayer} ${styles.layer2}`}
          d="M32 46c0-9 5-16 14-19-1 10-6 16-14 19Z"
          style={{ strokeWidth: "1px" }}
        />

        <path
          ref={addToRefs}
          className={`${styles.animationLayer} ${styles.layer3}`}
          d="M32 46c0-7-3-12-9-14"
          style={{ strokeWidth: "2px" }}
        />
      </svg>
    </div>
  );
}
