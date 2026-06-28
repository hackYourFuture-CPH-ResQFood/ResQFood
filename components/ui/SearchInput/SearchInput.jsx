"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./SearchInput.module.css";

export default function SearchInput({
  onSearch,
  placeholder = "Search",
  maxLength,
  inputMode = "text",
  error = "",
}) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = searchValue.trim();

    if (!searchTerm) {
      return;
    }

    onSearch?.(searchTerm);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          id="searchInput"
          className={styles.input}
          type="text"
          aria-label={placeholder}
          placeholder={placeholder}
          inputMode={inputMode}
          maxLength={maxLength}
          aria-invalid={!!error}
          aria-describedby={error ? "searchInputError" : undefined}
          value={searchValue}
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
        <p id="searchInputError" className={styles.error}>
          {error}
        </p>
      )}
    </form>
  );
}
