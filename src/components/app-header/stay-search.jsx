import React from "react"
import { CgSearch } from "react-icons/cg"

export const StaySearch = () => {
  return (
    <div className="stay-search">
      <button className="anywhere">Anywhere</button>
      <button className="any-week">Any week</button>
      <button className="add-guests">Add guests</button>
      <button className="search-icon-btn">
        <CgSearch />
      </button>
    </div>
  )
}
