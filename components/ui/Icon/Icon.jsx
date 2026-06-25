import styles from "./Icon.module.css";

export default function Icon({
  icon: IconComponent,
  label,
  size = "md",
  shape = "circle",
  color = "green",
  filled = false,
  strokeWidth = 2.5,
  className = "",
  ...props
}) {
  const sizeClass = styles[size] || styles.md;
  const shapeClass = styles[shape] || styles.circle;
  const colorClass = styles[color] || styles.green;
  const filledClass = filled ? styles.filled : "";

  return (
    <span
      className={`${styles.iconWrapper} ${sizeClass} ${shapeClass} ${colorClass} ${filledClass} ${className}`}
      aria-label={label}
      role={label ? "img" : undefined}
      {...props}
    >
      <IconComponent
        className={styles.icon}
        strokeWidth={strokeWidth}
        aria-hidden="true"
      />
    </span>
  );
}
