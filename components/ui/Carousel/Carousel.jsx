"use client";
import { Children, useRef } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ children, ariaLabel = "Carousel" }) {
  const trackRef = useRef(null);
  const slides = Children.toArray(children);

  const scrollByPage = (direction) => {
    const track = trackRef.current;

    if (!track) return;

    track.scrollBy({
      left: direction * track.clientWidth,
      behavior: "smooth",
    });
  };

  if (slides.length === 0) return null;

  return (
    <section className={styles.wrapper} aria-label={ariaLabel}>
      <button
        className={`${styles.navButton} ${styles.previousButton}`}
        type="button"
        onClick={() => scrollByPage(-1)}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <ul
        className={styles.sliderTrack}
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-label={ariaLabel}
      >
        {slides.map((slide, index) => (
          <li className={styles.slide} key={index}>
            {slide}
          </li>
        ))}
      </ul>
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        type="button"
        onClick={() => scrollByPage(1)}
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
