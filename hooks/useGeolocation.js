"use client";

import { useState } from "react";

export default function useGeolocation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserLocation = async () => {
    try {
      setLoading(true);
      setError(null);
      const position = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject),
      );
      return {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      };
    } catch (error) {
      setError(error.code);
      setLoading(false);
    }
  };

  return { loading, error, getUserLocation };
}
