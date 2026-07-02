"use client";
import { Children, useRef, useEffect, useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ children, ariaLabel = "Carousel" }) {
  const trackRef = useRef(null);
  const slides = Children.toArray(children);

  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = () => {
    const track = trackRef.current;

    if (!track) return;

    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    setCanScrollPrevious(track.scrollLeft > 0);
    setCanScrollNext(track.scrollLeft < maxScrollLeft - 1);
  };

  const scrollByPage = (direction) => {
    const track = trackRef.current;

    if (!track) return;

    track.scrollBy({
      left: direction * track.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollButtons();
    track.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      track.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [slides.length]);
  if (slides.length === 0) return null;

  return (
    <section className={styles.wrapper} aria-label={ariaLabel}>
      <button
        className={`${styles.navButton} ${styles.previousButton}`}
        type="button"
        onClick={() => scrollByPage(-1)}
        aria-label="Previous slide"
        disabled={!canScrollPrevious}
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
        disabled={!canScrollNext}
      >
        ›
      </button>
    </section>
  );
}
