import React, { useState } from "react"

export const Filter = ({ filter, onSelectFilter }) => {
  return (
    <>
      <li
        onClick={() => onSelectFilter(filter)}
        key={filter.filter}
        className="filter-preview"
      >
        <img src={filter.img} alt={filter.filter} />
        <span>{filter.filter}</span>
      </li>
    </>
  )
}
