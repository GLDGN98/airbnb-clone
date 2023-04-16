import React, { useState } from "react"
import { DynamicModal } from "./dynamic-modal"
import { TbSearch } from "react-icons/tb"

export const StaySearchExpanded = ({ staySearchExpanded }) => {
  const [clickedButton, setClickedButton] = useState(null)

  const handleButtonClick = (index) => {
    setClickedButton(index)
  }

  const closeModal = () => {
    setClickedButton(null)
  }

  return (
    <div
      className={
        staySearchExpanded
          ? "stay-search-expanded active"
          : "stay-search-expanded"
      }
    >
      <div className="category">
        <button
          className={clickedButton === 0 ? "active" : ""}
          onClick={() => handleButtonClick(0)}
        >
          Stays
        </button>
        <button
          className={clickedButton === 1 ? "active" : ""}
          onClick={() => handleButtonClick(1)}
        >
          Experiences
        </button>
        <button
          className={clickedButton === 2 ? "active" : ""}
          onClick={() => handleButtonClick(2)}
        >
          Online Experiences
        </button>
      </div>
      <div
        style={{ backgroundColor: clickedButton ? "#EBEBEB" : "#FFFFFF" }}
        className="stay-settings"
      >
        <div
          className={`where-settings ${
            clickedButton === "where" ? "active" : ""
          }`}
        >
          <label onClick={() => handleButtonClick("where")} className="where">
            Where
            <input
              style={{ backgroundColor: "inherit" }}
              type="text"
              className="search-dest"
              placeholder="Search destinations"
            />
          </label>
        </div>
        <div className="dates">
          <div
            className={`check-in ${
              clickedButton === "check-in" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("check-in")}
          >
            Check in
            <span>Add dates</span>
          </div>
          <div
            className={`check-out ${
              clickedButton === "check-out" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("check-out")}
          >
            Check out
            <span>Add dates</span>
          </div>
        </div>
        <div
          className={`who-search ${clickedButton === "who" ? "active" : ""}`}
          onClick={() => handleButtonClick("who")}
        >
          <div className="who">
            Who
            <span>Add guests</span>
          </div>

          <div className="stay-search-setting">
            <span className="search-icon">
              <TbSearch />
            </span>
          </div>
        </div>
      </div>
      {clickedButton && (
        <DynamicModal input={clickedButton} closeModal={closeModal} />
      )}
    </div>
  )
}
