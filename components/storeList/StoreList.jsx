"use client";
import styles from "./StoreList.module.css";
import StoreCard from "../storeCard/StoreCard";
import dataFormatter from "./dataFormatter.helper";
import ProductCard from "../product/ProductCard";

export default function StoreList({ data }) {
  if (!data) return <p>Loading stores...</p>;
  return (
    <>
      {data.map((item) => {
        const formattedStore = dataFormatter(item.store);
        const deals = item.clearances.length;
        return (
          <>
            <div className="will-be-StoreBlock-component">
              <StoreCard
                key={item.store.id}
                name={formattedStore.name}
                id={formattedStore.brand}
                address={formattedStore.address}
                distance={formattedStore.distance}
                openHours={formattedStore.workingHours.openHours}
                status={formattedStore.workingHours.status}
                deals={deals}
                variant="flat"
              />
              <div
                className={`${styles.productCarousel} will-be-Carousel-component`}
              >
                {item.clearances.map((deal) => (
                  <ProductCard
                    key={deal.offer.ean}
                    offer={deal.offer}
                    product={deal.product}
                  />
                ))}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
