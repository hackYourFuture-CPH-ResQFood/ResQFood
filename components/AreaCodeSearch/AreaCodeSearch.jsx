"use client";

import { useState } from "react";
import SearchInput from "@/components/ui/SearchInput/SearchInput";

export default function AreaCodeSearch({ onAreaCodeSearch }) {
  const [error, setError] = useState("");

  const validateAreaCode = (areaCode) => {
    if (!areaCode) {
      return "Area code is required.";
    }

    if (!/^\d{4,5}$/.test(areaCode)) {
      return "Area code must be 4-5 digits.";
    }

    return "";
  };

  const handleSearch = (areaCode) => {
    const validationError = validateAreaCode(areaCode);
    setError(validationError);

    if (validationError) {
      return;
    }

    onAreaCodeSearch?.(areaCode);
  };

  return (
    <SearchInput
      onSearch={handleSearch}
      error={error}
      placeholder="Enter your area code"
      aria-label="Enter your area code"
      inputMode="numeric"
      maxLength={5}
    />
  );
}
