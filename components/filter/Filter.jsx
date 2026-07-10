"use client";

import styles from "./Filter.module.css";
import { ListFilter } from "lucide-react";
export default function Filter({
  selectedCategory,
  onCategoryChange,
  categories,
}) {
  return (
    <section className={styles.filter} aria-label="Product category filter">
      <div className={styles.filterGroup}>
        <label htmlFor="productCategory" className={styles.label}></label>
        <div className={styles.selectWrapper}>
          <ListFilter className={styles.leftIcon} aria-hidden="true" />
          <select
            id="productCategory"
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
            className={styles.select}
          >
            <option value="All">All categories</option>

            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
