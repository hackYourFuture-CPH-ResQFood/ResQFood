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
          <p className="storeList-subHeading">
            {storeData.length} stores found
          </p>

          <StoreList data={storeData} />
        </>
      )}
    </main>
  );
}
