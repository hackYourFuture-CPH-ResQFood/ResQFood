import styles from "./Badge.module.css";

export default function Badge({
  children,
  variant = "deals",
  size = "md",
  className = "",
  ...props
}) {
  const variantClass = styles[variant] || styles.deals;
  const sizeClass = styles[size] || styles.md;

  return (
    <span
      className={`${styles.badge} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
