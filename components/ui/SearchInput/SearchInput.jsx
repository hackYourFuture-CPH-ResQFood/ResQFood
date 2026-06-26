"use client";

import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./SearchInput.module.css";

export default function SearchInput() {
  const [areaCode, setAreaCode] = useState("");
  const [error, setError] = useState("");

  const validateAreaCode = (value) => {
    const areaCodeRegex = /^\d{4,5}$/; // postcode in DK(4), in DE(5)

    if (!value.trim()) {
      return "Area code is required";
    }

    if (!areaCodeRegex.test(value)) {
      return "Please enter a valid area code";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateAreaCode(areaCode);
    setError(validationError);

    if (!validationError) {
      console.log("Valid area code:", areaCode);
    }
  };

  const handleChange = (e) => {
    setAreaCode(e.target.value);
    setError("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="areaCode">
        Enter your area code
      </label>
      <div className={styles.inputGroup}>
        <Icon
          icon={MapPin}
          label="Location"
          size="sm"
          shape="none"
          color="green"
          filled
          className={styles.locationIcon}
        />
        <input
          id="areaCode"
          className={styles.input}
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="Enter your area code"
          value={areaCode}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit" aria-label="Search">
          <Icon
            icon={Search}
            size="sm"
            shape="none"
            color="green"
            strokeWidth={2.5}
            className={styles.searchIcon}
          />
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}
