"use client";
import { Store } from "lucide-react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./StoreAvatar.module.css";

export default function StoreAvatar({
  brand = "default",
  label = "Store",
  size = "md",
  className = "",
}) {
  const brandClass = styles[brand] || styles.default;

  return (
    <Icon
      icon={Store}
      label={label}
      size={size}
      shape="circle"
      className={`${styles.storeAvatar} ${brandClass} ${className}`}
    />
  );
}
