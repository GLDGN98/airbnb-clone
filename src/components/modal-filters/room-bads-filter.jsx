import React from "react"
import { RoomBadsQuantity } from "./room-bads-cmp/room-bads-quantity"

export const RoomBadsFilter = ({ filterBy, setFilterBy }) => {
  return (
    <div className="room-bads-filter">
      <h2>Rooms and bads</h2>
      <div className="bedrooms">
        <span>Bedrooms</span>
        <RoomBadsQuantity
          field={"bedrooms"}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
      </div>
      <div className="beds">
        <span>Beds</span>
        <RoomBadsQuantity
          field={"beds"}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
      </div>
      <div className="bathrooms">
        <span>Bathrooms</span>
        <RoomBadsQuantity
          field={"bathrooms"}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
      </div>
    </div>
  )
}
