"use client";

import { useState } from "react";
import styles from "./PostCodeInput.module.css";

export default function PostCodeInput() {
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");

  const validatePostCode = (value) => {
    const postCodeRegex = /^\d{4,5}$/; // postcode in DK(4), in DE(5)

    if (!value.trim()) {
      return "Postcode is required";
    }

    if (!postCodeRegex.test(value)) {
      return "Please enter a valid postcode";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validatePostCode(postcode);
    setError(validationError);

    if (!validationError) {
      console.log("Valid postcode:", postcode);
    }
  };

  const handleChange = (e) => {
    setPostcode(e.target.value);
    setError("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="postcode">
        Enter your area code to see nearby options.
      </label>

      <div className={styles.inputGroup}>
        <input
          id="postcode"
          className={styles.input}
          type="text"
          inputMode="numeric"
          maxLength={5}
          placeholder="e.g., 2100 or 10115"
          value={postcode}
          onChange={handleChange}
        />

        <button className={styles.button} type="submit">
          ›
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}