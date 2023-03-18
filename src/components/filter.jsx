import React from "react"

export const Filter = ({ filter }) => {
  return (
    <li className="filter-preview">
      <img src={filter.img} alt={filter.filter} />
      <span>{filter.filter}</span>
    </li>
  )
}
