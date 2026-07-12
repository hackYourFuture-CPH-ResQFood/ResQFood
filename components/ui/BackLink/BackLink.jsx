"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Icon from "../Icon/Icon";
import styles from "./BackLink.module.css";

export default function BackLink({ href, label = "Go back" }) {
  const router = useRouter();

  const icon = (
    <Icon icon={ArrowLeft} size="sm" shape="none" color="darkGreen" />
  );

  if (href) {
    return (
      <Link href={href} aria-label={label} className={styles.backLink}>
        {icon}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      className={styles.backLink}
      onClick={() => router.back()}
    >
      {icon}
    </button>
  );
}
