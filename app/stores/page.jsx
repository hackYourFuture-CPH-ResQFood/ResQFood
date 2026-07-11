import Link from "next/link";
import StoreList from "@/components/storeList/StoreList";
import {
  getFoodWasteByGeo,
  getFoodWasteByZip,
} from "@/services/foodWasteService";

export default async function Stores({ searchParams }) {
  let storeData = [];
  let errorMessage = "";
  const params = await searchParams;

  const source = params.source; // tells if it is search or geolocation
  const areaCode = params.zip;
  const latitude = params.lat;
  const longitude = params.lng;
  const hasSearchRequest = source || areaCode || latitude || longitude;

  if (!hasSearchRequest) {
    return (
      <main>
        <h1 className="storeList-heading">Find stores near you</h1>
        <p className="storeList-subHeading">
          Search by zip code or use your location to see nearby food deals.
        </p>
        <Link href="/">Back to search</Link>
      </main>
    );
  }

  try {
    if (source === "search" && areaCode) {
      storeData = await getFoodWasteByZip(areaCode);
    } else if (source === "geolocation" && latitude && longitude) {
      storeData = await getFoodWasteByGeo(latitude, longitude);
    }
  } catch (error) {
    console.error("Failed to load stores:", error);

    errorMessage = "Could not load stores right now. Please try again later.";
  }

  return (
    <main>
      <p className="storeList-heading">
        Showing stores {areaCode ? `for ${areaCode}` : `near you`}
      </p>

      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <>
          <StoreList data={storeData} />
        </>
      )}
    </main>
  );
}
