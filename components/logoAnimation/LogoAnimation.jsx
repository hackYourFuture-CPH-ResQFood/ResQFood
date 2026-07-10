"use client";
import styles from "./LogoAnimation.module.css";
import React, { useEffect, useRef, useState } from "react";

export default function LogoAnimation() {
  const [isActive, setIsActive] = useState(false);
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

    const timer = setTimeout(() => {
      setIsActive(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.animationPage}>
      <div className={styles.animationContainer}>
        <div className={`${styles.hackMark} ${isActive ? styles.active : ""}`}>
          <svg
            id="svg"
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
              fill="none"
              opacity="1.000000"
              d="M32 54S6 38.5 6 21.5C6 12.4 13.2 6 21.3 6 26.5 6 30.4 8.7 32 12.4 33.6 8.7 37.5 6 42.7 6 50.8 6 58 12.4 58 21.5 58 38.5 32 54 32 54Z"
              style={{
                fill: "none",
                strokeWidth: "2.3px",
              }}
            />

            <path
              ref={addToRefs}
              fill="none"
              opacity="1.000000"
              className={`${styles.animationLayer} ${styles.layer2}`}
              d="M32 46c0-9 5-16 14-19-1 10-6 16-14 19Z"
              style={{
                fill: "none",
                strokeWidth: "1px",
              }}
            />
            <path
              ref={addToRefs}
              fill="none"
              opacity="1.000000"
              className={`${styles.animationLayer} ${styles.layer3}`}
              d="M32 46c0-7-3-12-9-14"
              style={{
                fill: "none",
                strokeWidth: "2px",
              }}
            />
          </svg>
        </div>
        <div className={styles.logoText}>
          <span className={styles.white}>
            Res<span className={styles.green}>Q</span>Food
          </span>
          <span
            className={`${styles.coverBox} ${isActive ? styles.active : ""}`}
          ></span>
        </div>
      </div>
    </div>
  );
}
