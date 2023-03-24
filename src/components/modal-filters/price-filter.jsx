import React, { useEffect } from "react"

export const PriceFilter = ({ filterBy, setFilterBy }) => {
  function handleChange({ target }) {
    let { value, name: field } = target
    setFilterBy((prev) => ({ ...prev, [field]: +value }))
  }

  return (
    <div className="price-filter">
      <h2>Price range</h2>
      <p>The average nightly price is 75$</p>
      <div className="price-filter-content">
        <label htmlFor="min-price">
          <span className="filter-price-label">min price</span>
          <div className="price-wrapper">
            <span className="curr-sign">$</span>
            <input
              value={filterBy.minPrice || ""}
              onChange={handleChange}
              id="min-price"
              type="number"
              placeholder="20"
              name="minPrice"
            />
          </div>
        </label>
        <span>-</span>
        <label htmlFor="min-price">
          <span className="filter-price-label">max price</span>
          <div className="price-wrapper">
            <span className="curr-sign">$</span>
            <input
              value={filterBy.maxPrice || ""}
              onChange={handleChange}
              id="max-price"
              type="number"
              placeholder="1000"
              name="maxPrice"
            />
          </div>
        </label>
      </div>
    </div>
  )
}
