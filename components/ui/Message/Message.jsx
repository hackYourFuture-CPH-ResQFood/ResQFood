import { TriangleAlert, CircleCheck, InfoIcon, CircleAlert, } from "lucide-react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./Message.module.css";

const messageConfig = {
  error: {
    icon: CircleAlert,
    className: styles.error,
  },
  success: {
    icon: CircleCheck,
    className: styles.success,
  },
  warning: {
    icon: TriangleAlert,
    className: styles.warning,
  },
  info: {
    icon: InfoIcon,
    className: styles.info,
  },
};
export default function Message({ 
  type = "info",
  children,
 }) {
   const config = messageConfig[type] || messageConfig.info;
  const MessageIcon = config.icon;

    return (
      <div className={`${styles.message} ${config.className}`} role="alert">
         <Icon
        icon={MessageIcon}
        size="xs"
        shape="none"
        className={styles.icon}
      />

      <p className={styles.text}>{children}</p>
    </div>
  );
}
 

