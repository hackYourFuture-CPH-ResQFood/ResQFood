"use client";
import styles from "./StoreList.module.css";
import StoreCard from "../storeCard/StoreCard";
import dataFormatter from "./dataFormatter.helper";
import ProductCard from "../product/ProductCard";
import Carousel from "../ui/Carousel/Carousel";
import Link from "next/link";

export default function StoreList({ data }) {
  if (!data) return <p>Loading stores...</p>;
  return (
    <>
      {data.map((item) => {
        const formattedStore = dataFormatter(item.store);
        const deals = item.clearances.length;
        return (
          <>
            <div
              key={item.store.id}
              className={`${styles.blockStore} will-be-StoreBlock-component`}
            >
              <Link
                className={styles.link}
                href={`/storeDetailPage/${item.store.id}`}
              >
                <StoreCard
                  name={formattedStore.name}
                  id={formattedStore.brand}
                  address={formattedStore.address}
                  distance={formattedStore.distance}
                  openHours={formattedStore.workingHours.openHours}
                  status={formattedStore.workingHours.status}
                  deals={deals}
                  variant="flat"
                />
              </Link>
              <div className={styles.divider}></div>
              <Carousel className={styles.productCarousel}>
                {item.clearances.map((deal) => (
                  <div key={deal.offer.ean}>
                    <Link
                      className={styles.link}
                      href={`/storeDetailPage/${deal.offer.ean}`}
                    >
                      <ProductCard offer={deal.offer} product={deal.product} />
                    </Link>
                  </div>
                ))}
              </Carousel>
            </div>
          </>
        );
      })}
    </>
  );
}
