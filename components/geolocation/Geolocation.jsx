"use client";
import styles from "./Geolocation.module.css";
import useGeolocation from "@/hooks/useGeolocation";
import AnimatedTargetIcon from "./AnimatedTargetIcon";

export function Geolocation({ setUserPosition, getError }) {
  const { loading, getUserLocation } = useGeolocation();

  const awaitLocation = async () => {
    try {
      const response = await getUserLocation();
      setUserPosition(response);
    } catch (error) {
      getError(error.code);
    }
  };

  return (
    <div className={styles.geolocationWrapper}>
      <button
        className={`${styles.locationButton} location-trigger target-container u-flex-center`}
        onClick={awaitLocation}
        disabled={loading}
        type="button"
      >
        <AnimatedTargetIcon size={32} />
        <span className={styles.linkText}>
          {loading ? "Getting your location" : "Use my location instead"}
        </span>
      </button>
       {/* <hr className={styles.divider} /> */}
    </div>
     
  );
}
