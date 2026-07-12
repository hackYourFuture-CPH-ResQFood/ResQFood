import Image from "next/image";
import LocationLogo from "./assets/location.png";
import OfferLogo from "./assets/offer.png";
import HeartLogo from "./assets/heart.png";
import styles from "./InfoSteps.module.css";

const defaultSteps = [
    { image: LocationLogo, text: "Find stores near you" },
    { image: OfferLogo, text: "See today's offers" },
    { image: HeartLogo, text: "Save money and reduce waste" },
];

export default function InfoSteps({ steps = defaultSteps }) {
    return (
        <div className={styles.infoSteps}>
            <p className={styles.infoStepTitle}>Rescue good foods.</p>
            <p className={styles.infoStepSubtitle}>Reduce waste.</p>
            <p className={styles.infoStepText}>
                Start reducing food waste in 3 simple steps:
            </p>
            <ul className={styles.steps}>
                {steps.map(({ image, text }) => (
                    <li className={styles.step} key={text}>
                        <span className={styles.stepIconFrame}>
                            <Image className={styles.stepIconImage} src={image} alt="" aria-hidden="true" />
                        </span>
                        <p className={styles.stepText}>{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}