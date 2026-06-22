import styles from "./Skeleton.module.css";

export default function Skeleton({
  width = "100%",
  height = "20px",
  borderRadius = "var(--border-radius-sm)",
  className = "",
  style,
  ...props
}) {
  const skeletonStyles = {
    width,
    height,
    borderRadius,
    ...style,
  };

  const skeletonClassName = `${styles.skeleton} ${className}`;

  return (
    <div
      className={skeletonClassName}
      style={skeletonStyles}
      aria-hidden="true"
      {...props}
    />
  );
}
