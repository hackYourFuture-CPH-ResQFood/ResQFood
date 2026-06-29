import styles from "./Logo.module.css";
import { cn } from "@/utils/cn.js";
//cn is a short helper to remove falsy from className parameters

function LogoMark() {
  // a heart shape with a leaf
  return (
    <svg
      className={styles.mark}
      viewBox="0 0 64 60"
      role="img"
      aria-label="ResQFood logo"
      fill="none"
    >
      <path
        d="M32 54S6 38.5 6 21.5C6 12.4 13.2 6 21.3 6 26.5 6 30.4 8.7 32 12.4 33.6 8.7 37.5 6 42.7 6 50.8 6 58 12.4 58 21.5 58 38.5 32 54 32 54Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M32 46c0-9 5-16 14-19-1 10-6 16-14 19Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M32 46c0-7-3-12-9-14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ markOnly = false, size = "md", className = "" }) {
  return (
    <span className={cn(styles.logo, styles[size], className)}>
      <LogoMark />
      {!markOnly && (
        <span className={styles.wordmark}>
          Res<span className={styles.q}>Q</span>Food
        </span>
      )}
    </span>
  );
}
