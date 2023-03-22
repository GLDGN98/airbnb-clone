import React from "react"

export const Filter = ({ filter, onSelectFilter, selectedFilter }) => {
  const isSelected = filter.filter === selectedFilter

  return (
    <li
      onClick={() => onSelectFilter(filter.filter)}
      key={filter.filter}
      className={`filter-preview ${isSelected ? "selected" : ""}`}
    >
      <img src={filter.img} alt={filter.filter} />
      <span>{filter.filter}</span>
    </li>
  )
}
