import { notFound } from "next/navigation";
import StoreCard from "@/components/storeCard/StoreCard";
import ProductDetailCard from "@/components/product/ProductDetailCard";
import { getProductByStoreAndEan } from "@/services/foodWasteService";

export default async function ProductDetailPage({ params }) {
  const { id, productId } = await params;

  let productData;

  try {
    productData = await getProductByStoreAndEan(id, productId);
  } catch (error) {
    notFound();
  }

  const { store, offer, product } = productData;

  return (
    <main>
      <div>
        <div>
          <StoreCard
            id={store.id}
            name={store.name}
            address={store.address.street}
            openHours={store.openHours}
            status="open"
            deals={1}
            variant="bordered"
          />
        </div>

        <div>
          <ProductDetailCard offer={offer} product={product} />
        </div>
      </div>
    </main>
  );
}
