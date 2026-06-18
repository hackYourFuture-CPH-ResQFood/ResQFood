import Image from "next/image";
import styles from "./Badge.module.css";

const brands = {
  bilka: {
    label: "Bilka",
    logo: "/logo/bilka.svg",
    boxClass: styles.bilkaBox,
    logoClass: styles.bilkaLogo,
  },
  foetex: {
    label: "føtex",
    logo: "/logo/foetex.png",
    boxClass: styles.foetexBox,
    logoClass: styles.foetexLogo,
  },
  netto: {
    label: "Netto",
    logo: "/logo/netto.png",
    boxClass: styles.nettoBox,
    logoClass: styles.nettoLogo,
  },
  salling: {
    label: "Salling",
    logo: "/logo/salling.png",
    boxClass: styles.sallingBox,
    logoClass: styles.sallingLogo,
  },
};

export default function Badge({ brand, size = "md" }) {
  const brandData = brands[brand?.toLowerCase()];

  if (!brandData) {
    return (
      <span className={`${styles.badge} ${styles[size]} ${styles.fallback}`}>
        Unknown brand
      </span>
    );
  }

  return (
    <span className={`${styles.badge} ${styles[size]}`}>
      <span className={`${styles.logoBox} ${brandData.boxClass}`}>
        <Image
          src={brandData.logo}
          alt={`${brandData.label} logo`}
          className={`${styles.logo} ${brandData.logoClass}`}
          width={100}
          height={40}
        />
      </span>
    </span>
  );
}
