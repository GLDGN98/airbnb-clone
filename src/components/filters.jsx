import React from "react"
import { stayService } from "../services/stay-service"
import { Filter } from "./filter"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
const filters = stayService.getFilters()

export const Filters = () => {

    const carouselSettings = {
        showArrows: true,
        showStatus: false,
        showThumbs: false,
        showIndicators: false,
        
      }
  return (
    <Carousel {...carouselSettings}>
        
      <ul className="filter-list">
        {filters.map((filter) => (
          <Filter filter={filter} />
        ))}
      </ul>
    </Carousel>
  )
}
