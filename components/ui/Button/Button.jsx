import styles from "./Button.module.css";

export default function Button({ children, className = "", type = "button", ...props }) {
  return (
    <button className={`${styles.button} ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}