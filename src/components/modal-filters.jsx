import React from "react"
import { PlaceFilter } from "./place-filter"
import { PriceFilter } from "./price-filter"
import { MdOutlineClose } from "react-icons/md"

export const ModalFilters = ({
  setFiltersModalOpen,
  filterBy,
  setFilterBy,
}) => {
  return (
    <div className="modal-filters">
      <div className="header">
        <button onClick={() => setFiltersModalOpen(false)} className="close">
          <MdOutlineClose fontSize={"16px"} />
        </button>
        <h4>Filters</h4>
      </div>
      <PriceFilter />
      <PlaceFilter />
      <div className="footer">
        <button className="clear">Clear all</button>
        <button className="show-homes">Show homes</button>
      </div>
    </div>
  )
}
