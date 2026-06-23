import styles from "./Badge.module.css";

export default function Badge({
  children,
  variant = "neutral",
  size = "md",
  shape = "pill",
  className = "",
  ...props
}) {
  const variantClass = styles[variant] || styles.neutral;
  const sizeClass = styles[size] || styles.md;
  const shapeClass = styles[shape] || styles.pill;

  return (
    <span
      className={`${styles.badge} ${variantClass} ${sizeClass} ${shapeClass} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
