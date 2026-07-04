"use client";

import styles from "./Filter.module.css";

export default function Filter({
  selectedCategory,
  onCategoryChange,
  categories,
}) {
  return (
    <section className={styles.filter} aria-label="Product category filter">
     
      <div className={styles.filterGroup}>
        <label htmlFor="productCategory" className={styles.label}>
          Choose the category
        </label>

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
    </section>
  );
}