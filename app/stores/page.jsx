import BackLink from "@/components/ui/BackLink/BackLink";
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
        <div className="pageContentContainer">
          <div className="pageTopBar">
            <BackLink href="/" label="Back to search" />
          </div>
          <h1 className="storeList-heading">Find stores near you</h1>
          <p className="storeList-subHeading">
            Search by zip code or use your location to see nearby food deals.
          </p>
        </div>
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
      <div className="pageContentContainer">
        <div className="pageTopBar">
          <BackLink href="/" label="Back to search" />
        </div>
        <p className="storeList-heading">
          Showing stores {areaCode ? `for ${areaCode}` : `near you`}
        </p>

        {errorMessage ? <p>{errorMessage}</p> : <StoreList data={storeData} />}
      </div>
    </main>
  );
}
