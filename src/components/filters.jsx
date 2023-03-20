import React, { useState, useRef } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { stayService } from "../services/stay-service"
import { Filter } from "./filter"

const filters = stayService.getFilters()

export const Filters = ({ setFilterBy, filterBy, loadNewStays }) => {
  const [leftIsFullyScrolled, setLeftIsFullyScrolled] = useState(true)
  const [rightIsFullyScrolled, setRightIsFullyScrolled] = useState(false)
  const filterListRef = useRef(null)

  function handleScrollFilters(direction) {
    const filterList = filterListRef.current
    const scrollDistance = filterList.clientWidth / 2 // Set scroll distance to half of the client width
    if (direction === -1) {
      filterList.scrollBy({
        left: -scrollDistance,
        behavior: "smooth",
      })
    } else if (direction === 1) {
      filterList.scrollBy({
        left: scrollDistance,
        behavior: "smooth",
      })
    }
  }

  function onSelectFilter(selectedFilter) {
    if (filterBy.selectedFilter === selectedFilter) {
      setFilterBy((prevFilterBy) => ({ ...prevFilterBy, selectedFilter: "" }))
    } else {
      setFilterBy((prevFilterBy) => ({ ...prevFilterBy, selectedFilter }))
    }

    loadNewStays()
  }

  function handleScroll() {
    const filterList = filterListRef.current
    if (filterList.scrollLeft === 0) {
      setLeftIsFullyScrolled(true)
    } else {
      setLeftIsFullyScrolled(false)
    }
    if (
      filterList.scrollLeft + filterList.clientWidth >=
      Math.max(filterList.clientWidth, filterList.scrollWidth)
    ) {
      setRightIsFullyScrolled(true)
    } else {
      setRightIsFullyScrolled(false)
    }
  }

  return (
    <div className="filter-list-wrapper">
      <ul className="filter-list" ref={filterListRef} onScroll={handleScroll}>
        {filters.map((filter, idx) => (
          <Filter
            selectedFilter={filterBy.selectedFilter}
            onSelectFilter={onSelectFilter}
            key={idx}
            filter={filter}
          />
        ))}
      </ul>
      <div className="slider-controls">
        {!leftIsFullyScrolled && (
          <button
            className="btn-scroll-left"
            onClick={() => handleScrollFilters(-1)}
          >
            <BiChevronLeft fontSize={"1.2rem"} />
          </button>
        )}
        {!rightIsFullyScrolled && (
          <button
            className="btn-scroll-right"
            onClick={() => handleScrollFilters(1)}
          >
            <BiChevronRight fontSize={"1.2rem"} />
          </button>
        )}
      </div>
    </div>
  )
}
