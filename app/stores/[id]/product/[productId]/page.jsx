import { notFound } from "next/navigation";
import StoreCard from "@/components/storeCard/StoreCard";
import ProductDetailCard from "@/components/product/ProductDetailCard";
import { getProductByStoreAndEan } from "@/services/foodWasteService";
import dataFormatter from "@/components/storeList/dataFormatter.helper";
import BackLink from "@/components/ui/BackLink/BackLink";

export default async function ProductDetailPage({ params }) {
  const { id, productId } = await params;

  let productData;

  try {
    productData = await getProductByStoreAndEan(id, productId);
  } catch (error) {
    notFound();
  }

  const { store, offer, product } = productData;
  const formattedStore = dataFormatter(store);

  if (!formattedStore) {
    notFound();
  }

  return (
    <main>
      <div>
        <BackLink href="/stores" />
      </div>
      <div>
        <div>
          <StoreCard
            name={formattedStore.name}
            id={formattedStore.brand}
            address={formattedStore.address}
            distance={formattedStore.distance}
            openHours={formattedStore.workingHours}
            status={formattedStore.status}
            variant="flat"
          />
        </div>

        <section>
          <ProductDetailCard offer={offer} product={product} />
        </section>
      </div>
    </main>
  );
}