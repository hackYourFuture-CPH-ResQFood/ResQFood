import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  radius = "sm",
  type = "button",
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) {
  const variantClass = styles[variant] || styles.primary;
  const sizeClass = styles[size] || styles.md;
  const radiusClass =
    styles[`radius${radius.charAt(0).toUpperCase() + radius.slice(1)}`] ||
    styles.radiusSm;
  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass} ${radiusClass} ${className}`}
      type={type}
      {...props}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

      <span>{children}</span>

      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
}
