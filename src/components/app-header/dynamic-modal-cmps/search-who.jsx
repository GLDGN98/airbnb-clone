import React from "react"
import { FaPlus, FaMinus } from "react-icons/fa"
import { StaySettings } from "../stay-settings"

export const SearchWho = ({
  buttonCoords,
  updateCategoryAmount,
  staySettings,
}) => {
  return (
    <div style={buttonCoords} className="search-who">
      <div className="adults-category">
        <div className="adults">
          <span>Adults</span>
          <p>Ages 13 or above</p>
        </div>
        <div className="adults-amount">
          <button onClick={() => updateCategoryAmount("adults", "-")}>
            <FaMinus />
          </button>
          <span>{staySettings.adults || 0}</span>
          <button onClick={() => updateCategoryAmount("adults", "+")}>
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="children-category">
        <div className="childrens">
          <span>Children</span>
          <p>Ages 2 - 12</p>
        </div>
        <div className="childrens-amount">
          <button onClick={() => updateCategoryAmount("childrens", "-")}>
            <FaMinus />
          </button>
          <span>{staySettings.childrens || 0}</span>
          <button onClick={() => updateCategoryAmount("childrens", "+")}>
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="infants-category">
        <div className="infants">
          <span>Infants</span>
          <p>Under 2</p>
        </div>
        <div className="infants-amount">
          <button onClick={() => updateCategoryAmount("infants", "-")}>
            <FaMinus />
          </button>
          <span>{staySettings.infants || 0}</span>
          <button onClick={() => updateCategoryAmount("infants", "+")}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  )
}
