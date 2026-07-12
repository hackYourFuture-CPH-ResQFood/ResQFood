import { notFound } from "next/navigation";
import StoreCard from "@/components/storeCard/StoreCard";
import ProductDetailCard from "@/components/product/ProductDetailCard";
import {
  getProductByStoreAndEan,
  getFoodWasteByStoreId,
} from "@/services/foodWasteService";
import dataFormatter from "@/components/storeList/dataFormatter.helper";
import BackLink from "@/components/ui/BackLink/BackLink";

export default async function ProductDetailPage({ params }) {
  const { id, productId } = await params;

  let productData;
  let storeData;

  try {
    [productData, storeData] = await Promise.all([
      getProductByStoreAndEan(id, productId),
      getFoodWasteByStoreId(id),
    ]);
  } catch {
    notFound();
  }

  const { store, offer, product } = productData;
  const formattedStore = dataFormatter(store);

  if (!formattedStore || !offer || !product) {
    notFound();
  }

  return (
    <main className="productDetailPage">
      <div className="pageContentContainer">
        <div className="pageTopBar">
          <BackLink />
        </div>

        <div className="productDetailPageContent">
          <div className="productDetailStore">
            <StoreCard
              name={formattedStore.name}
              id={formattedStore.brand}
              address={formattedStore.address}
              distance={formattedStore.distance}
              openHours={formattedStore.workingHours}
              status={formattedStore.status}
              deals={storeData.clearances?.length ?? 0}
              variant="inactive"
            />
          </div>

          <section className="productDetailProduct">
            <ProductDetailCard offer={offer} product={product} />
          </section>
        </div>
      </div>
    </main>
  );
}
