"use client";

import { useState } from "react";

export default function useGeolocation() {
  const [loading, setLoading] = useState(false);

  const getUserLocation = async () => {
    try {
      setLoading(true);
      const position = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject),
      );
      return {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      };
    } finally {
      setLoading(false);
    }
  };

  return { loading, getUserLocation };
}
