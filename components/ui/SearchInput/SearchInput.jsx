"use client";

import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./SearchInput.module.css";

export default function SearchInput({ onSearch }) {
  const [areaCode, setAreaCode] = useState("");
  const [error, setError] = useState("");

  const validateAreaCode = (value) => {
  const areaCodeRegex = /^\d{4,5}$/;

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

    const handleSubmit = (e) => {
  e.preventDefault();

  const validationError = validateAreaCode(areaCode);
  setError(validationError);

  if (!validationError) {
    onSearch?.(areaCode);
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
          filled
          className={styles.locationIcon}
        />
        <input
          id="areaCode"
          className={styles.input}
          type="text"
          inputMode="numeric"
          maxLength={5}
          aria-invalid={!!error}
          aria-describedby={error ? "areaCodeError" : undefined}
          placeholder="Enter your area code"
          value={areaCode}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit" aria-label="Search">
          <Icon
            icon={Search}
            size="sm"
            shape="none"
            strokeWidth={2.5}
            className={styles.searchIcon}
          />
        </button>
      </div>

      {error && (
        <p id="areaCodeError" className={styles.error}>
          {error}
        </p>
      )}
    </form>
  );
}
