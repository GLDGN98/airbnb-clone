import React from "react"
import { PlaceFilter } from "./modal-filters/place-filter"
import { PriceFilter } from "./modal-filters/price-filter"
import { MdOutlineClose } from "react-icons/md"
import { RoomBadsFilter } from "./modal-filters/room-bads-filter"

export const ModalFilters = ({
  setFiltersModalOpen,
  filterBy,
  setFilterBy,
  handleModalFilter,
}) => {
  return (
    <div className="modal-filters">
      <div className="header">
        <button onClick={() => setFiltersModalOpen(false)} className="close">
          <MdOutlineClose fontSize={"16px"} />
        </button>
        <h4>Filters</h4>
      </div>
      <PriceFilter filterBy={filterBy} setFilterBy={setFilterBy} />
      <PlaceFilter filterBy={filterBy} setFilterBy={setFilterBy} />
      <RoomBadsFilter filterBy={filterBy} setFilterBy={setFilterBy} />
      <div className="footer">
        <button className="clear">Clear all</button>
        <button onClick={handleModalFilter} className="show-homes">
          Show homes
        </button>
      </div>
    </div>
  )
}
