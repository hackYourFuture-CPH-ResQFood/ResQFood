"use client";
import styles from "./LogoAnimation.module.css";
import React, { useEffect, useState } from "react";
import Spinner from "../ui/Spinner/Spinner";

export default function LogoAnimation() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.animationPage}>
      <div className={styles.animationContainer}>
        <div className={`${styles.hackMark} ${isActive ? styles.active : ""}`}>
          {/* Renders and starts the run-once animation only when active */}
          {isActive && <Spinner isInfinite={false} size="lg" />}
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
