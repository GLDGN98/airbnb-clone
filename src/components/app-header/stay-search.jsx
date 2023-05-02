import React, { useEffect, useRef, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { StaySearchExpanded } from "./stay-search-expanded"

export const StaySearch = () => {
  const [staySearchExpanded, setStaySearchExpanded] = useState(false)

  const staySearchRef = useRef()

  useEffect(() => {
    let handleSearch = (e) => {
      if (
        staySearchRef.current &&
        !staySearchRef.current.contains(e.target) &&
        !staySearchRef.current.parentNode.contains(e.target)
      ) {
        setStaySearchExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleSearch)

    return () => {
      document.removeEventListener("mousedown", handleSearch)
    }
  }, [])

  return (
    <div className="stay-search-close">
      {!staySearchExpanded && (
        <div className="stay-search">
          <button
            onClick={() => setStaySearchExpanded("anywhere")}
            className="anywhere"
          >
            Anywhere
          </button>
          <button
            onClick={() => setStaySearchExpanded("any-week")}
            className="any-week"
          >
            Any week
          </button>
          <button
            onClick={() => setStaySearchExpanded("add-guests")}
            className="add-guests"
          >
            Add guests
          </button>
          <button
            className="search-icon-btn"
            onClick={() => setStaySearchExpanded("search-icon-btn")}
          >
            <FaSearch />
          </button>
        </div>
      )}
      {staySearchExpanded && (
        <>
          <div
            className="modal-overlay"
            onClick={() => setStaySearchExpanded(false)}
          ></div>
          <div className="modal-container">
            <StaySearchExpanded
              staySearchExpanded={staySearchExpanded}
              setStaySearchExpanded={setStaySearchExpanded}
            />
          </div>
        </>
      )}
    </div>
  )
}
