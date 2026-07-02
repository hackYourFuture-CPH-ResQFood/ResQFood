import { ApiError } from "./ApiError";
import { apiClient } from "./client";

export async function getFoodWasteByGeo(latitude, longitude, radius = 3) {
  if (latitude == null || longitude == null)
    throw new ApiError("Coordinates are required", {
      status: 0,
      details: "MISSING_COORDS",
    });
  const path = `/v1/food-waste/?geo=${latitude},${longitude}&radius=${radius}`;
  return apiClient(path);
}

export async function getFoodWasteByZip(zip) {
  if (zip == null)
    throw new ApiError("Zip code is required", {
      status: 0,
      details: "MISSING_ZIP_CODE",
    });
  const path = `/v1/food-waste/?zip=${zip}`;
  return apiClient(path);
}
