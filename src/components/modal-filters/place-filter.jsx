import React from "react"

export const PlaceFilter = ({ filterBy, setFilterBy }) => {
  function handleChange({ target }) {
    let { name: field } = target
    setFilterBy((prev) => ({
      ...prev,
      types: filterBy.types.includes(field)
        ? filterBy.types.filter((type) => type !== field)
        : [...filterBy.types, field],
    }))
  }

  return (
    <div className="place-filter">
      <h2>Type of place</h2>
      <div className="type-of-place">
        <label htmlFor="entire-place">
          <div className="checkbox-filter-input">
            <input
              onChange={handleChange}
              type="checkbox"
              placeholder="A place all to yourself"
              name="Entire home/apt"
              id="entire-place"
            />
          </div>
          <div>
            <span>Entire place</span>
            <p>A place all to yourself</p>
          </div>
        </label>
        <label htmlFor="private-room">
          <div className="checkbox-filter-input">
            <input
              onChange={handleChange}
              type="checkbox"
              placeholder="our own room in a home or a hotel, plus some shared common spaces"
              name="Private room"
              id="private-room"
            ></input>
          </div>
          <div>
            <span>Private room</span>
            <p>
              Your own room in a home or a hotel, plus some shared common spaces
            </p>
          </div>
        </label>
      </div>
    </div>
  )
}
