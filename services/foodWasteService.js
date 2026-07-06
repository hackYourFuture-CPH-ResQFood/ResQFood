import { ApiError } from "./ApiError";
import { apiClient } from "./client";
import data from "../app/mockData/foodWaste";

const endpoint = "/v1/food-waste/";

function queryBuilder(params) {
  const query = new URLSearchParams(params);
  return query.toString();
}

const useRealData = process.env.USE_REAL_DATA === "true";

export async function getFoodWasteByStoreId(id) {
    if (useRealData === false) {
    return data;
  }
  if (id == null)
    throw new ApiError("Store id is required", {
      status: 0,
      details: "MISSING_STORE_ID",
    });
  const path = `${endpoint}${id}`;
  return apiClient(path);
}

export async function getFoodWasteByGeo(latitude, longitude, radius = 3) {
  if (useRealData === false) {
    return data;
  }
  if (latitude == null || longitude == null)
    throw new ApiError("Coordinates are required", {
      status: 0,
      details: "MISSING_COORDS",
    });
  const query = queryBuilder({
    geo: `${latitude},${longitude}`,
    radius,
  });
  const path = `${endpoint}?${query}`;
  return apiClient(path);
}

export async function getFoodWasteByZip(zip) {
  if (useRealData === false) {
    return data;
  }
  if (zip == null)
    throw new ApiError("Zip code is required", {
      status: 0,
      details: "MISSING_ZIP_CODE",
    });
  const query = queryBuilder({ zip });
  const path = `${endpoint}?${query}`;
  return apiClient(path);
}

export async function getProductByStoreAndEan(id, ean) {
  if (id == null) {
    throw new ApiError("Store is not found", {
      status: 0,
      details: "MISSING_STORE",
    });
  }

  if (ean == null) {
    throw new ApiError("Product is not found", {
      status: 0,
      details: "MISSING_PRODUCT",
    });
  }

  const storeResult = await getFoodWasteByStoreId(id);

  const selectedProduct = storeResult.clearances.find((item) => {
    return String(item.offer.ean) === String(ean);
  });

  if (!selectedProduct) {
    throw new ApiError("Product is not found in the store", {
      status: 404,
      details: "MISSING_PRODUCT_IN_STORE",
    });
  }

  return {
    store: storeResult.store,
    offer: selectedProduct.offer,
    product: selectedProduct.product,
     };
}
