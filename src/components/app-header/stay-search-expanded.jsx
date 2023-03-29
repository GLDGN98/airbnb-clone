import React, { useEffect, useRef } from "react"
import { FaSearch } from "react-icons/fa"

export const StaySearchExpanded = ({ staySearchExpanded }) => {
  useEffect(() => {
    if (staySearchExpanded) {
      document.body.classList.add("modal-open")
    } else {
      document.body.classList.remove("modal-open")
    }

    return () => {
      document.body.classList.remove("modal-open")
    }
  }, [staySearchExpanded])

  return (
    <div
      className={
        staySearchExpanded
          ? "stay-search-expanded active"
          : "stay-search-expanded"
      }
    >
      <div className="category">
        <button>Stays</button>
        <button>Experiences</button>
        <button>Online Experiences</button>
      </div>
      <div className="stay-settings">
        <label className="where">
          Where
          <input type="text" className="search-dest" placeholder="Search destinations" />
        </label>
        <div className="dates">
          <div className="check-in">
            Check in
            <span>Add dates</span>
          </div>
          <div className="check-out">
            Check out
            <span>Add dates</span>
          </div>
        </div>
        <div className="who-search">
          <div className="who">
            Who
            <span>Add guests</span>
          </div>

          <div className="stay-search-setting">
            <span className="search-icon">
              <FaSearch />
              {/* Search */}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
