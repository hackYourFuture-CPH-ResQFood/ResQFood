"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import FrontpageBanner from "@/components/FrontpageBanner/FrontpageBanner";
import InfoList from "@/components/ui/InfoList/InfoList";
import Message from "@/components/ui/Message/Message";
import SearchInput from "@/components/ui/SearchInput/SearchInput";
import { Geolocation } from "@/components/geolocation/Geolocation";
import InfoSteps from "@/components/infoSteps/InfoSteps";
import LogoAnimation from "@/components/logoAnimation/LogoAnimation";

export default function Home() {
  const router = useRouter();
  const [locationError, setLocationError] = useState(null);
  const [searchError, setSearchError] = useState("");

  const buildStoresUrl = (params) => {
    const searchParams = new URLSearchParams(params);
    return `/stores?${searchParams.toString()}`;
  };

  const goToStoresBySearch = (searchTerm) => {
    const zip = searchTerm.trim();

    if (!zip) {
      setSearchError("Please enter a zip code.");
      return;
    }

    if (!/^\d{4,5}$/.test(zip)) {
      setSearchError("Zip code must be 4 or 5 digits.");
      return;
    }

    setSearchError("");
    setLocationError(null);

    router.push(buildStoresUrl({ zip, source: "search" }));
  };

  const goToStoresByLocation = (position) => {
    const latitude = Number(position?.latitude);
    const longitude = Number(position?.longitude);

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      setLocationError("invalid_position");
      return;
    }

    setLocationError(null);
    setSearchError("");

    router.push(
      buildStoresUrl({
        lat: String(latitude),
        lng: String(longitude),
        source: "geolocation",
      }),
    );
  };

  const handleLocationError = (errorCode) => {
    setLocationError(errorCode);
  };

  const getLocationErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 1:
        return "We could not use your location because permission was denied. Enable location access in your browser settings or search by zip code instead.";
      case 2:
        return "We could not determine your location right now. Please try again.";
      case 3:
        return "Location request timed out. Please try again.";
      case "invalid_position":
        return "Location data is invalid. Please try again.";
      default:
        return "We could not access your location. Please try again.";
    }
  };

  return (
    <>
      <LogoAnimation />
      <main>
        <div className="mainPageContainer">

          <section className="actionSection">
            <div className="infoBlock">
              {locationError ? (
                <Message type="error">
                  {getLocationErrorMessage(locationError)}
                </Message>
              ) : (
                <InfoSteps />
              )}
            </div>

            <div className="searchBlock">
              <section className="findStoresSection">
                <h2 className="findStoresTitle">Find stores near you</h2>
                <SearchInput
                  onSearch={goToStoresBySearch}
                  error={searchError}
                  placeholder="Enter zip code (4 - 5 digits)"
                  inputMode="numeric"
                  maxLength={5}
                  buttonText="Search"
                />
              </section>

              <Geolocation
                setUserPosition={goToStoresByLocation}
                getError={handleLocationError}
              />
            </div>
          </section>          
          <section>
            <InfoList />
          </section>
          
          <section className="bannerSection">
            <FrontpageBanner />
          </section>
        </div>
      </main>
    </>
  );
}
