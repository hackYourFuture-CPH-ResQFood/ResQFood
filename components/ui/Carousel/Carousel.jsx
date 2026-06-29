import { Children } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ children, ariaLabel = "Carousel" }) {
  const slides = Children.toArray(children);

  return (
    <section className={styles.wrapper} aria-label={ariaLabel}>
      <ul className={styles.sliderTrack}>
        {slides.map((slide, index) => (
          <li className={styles.slide} key={index}>
            {slide}
          </li>
        ))}
      </ul>
    </section>
  );
}
