import React from "react"

export const PriceFilter = () => {
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
              id="min-price"
              type="number"
              placeholder="20"
              name="min-price"
            />
          </div>
        </label>
        <span>-</span>
        <label htmlFor="min-price">
          <span className="filter-price-label">max price</span>
          <div className="price-wrapper">
            <span className="curr-sign">$</span>
            <input
              id="max-price"
              type="number"
              placeholder="1000"
              name="max-price"
            />
          </div>
        </label>
      </div>
    </div>
  )
}
