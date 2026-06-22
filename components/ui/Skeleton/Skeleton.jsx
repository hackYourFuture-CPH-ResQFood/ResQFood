import styles from "./Skeleton.module.css";

export default function Skeleton({
  width = "100%",
  height = "20px",
  radius = "sm",
  className = "",
  style,
  ...props
}) {
  const radiusClass =
    styles[`radius${radius.charAt(0).toUpperCase() + radius.slice(1)}`] ||
    styles.radiusSm;

  const skeletonStyles = {
    width,
    height,

    ...style,
  };

  const skeletonClassName = `${styles.skeleton} ${radiusClass} ${className}`;

  return (
    <div
      className={skeletonClassName}
      style={skeletonStyles}
      aria-hidden="true"
      {...props}
    />
  );
}
