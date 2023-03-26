import React, { useEffect, useRef } from "react"

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
      <div className="stay-search-settings"></div>
    </div>
  )
}
