import React from "react"
import { TbSearch } from "react-icons/tb"

export const StaySettings = ({
  clickedButton,
  handleButtonClick,
  staySettings,
}) => {
  return (
    <div
      style={{ backgroundColor: clickedButton ? "#EBEBEB" : "#FFFFFF" }}
      className="stay-settings"
    >
      <div
        onClick={(e) => handleButtonClick("where", e)}
        className={`where-settings ${
          clickedButton === "where" ? "active" : ""
        }`}
      >
        <label className="where">
          Where
          <input
            value={staySettings?.origin}
            style={{ backgroundColor: "inherit" }}
            type="text"
            className="search-dest"
            placeholder="Search destinations"
          />
        </label>
      </div>
      <div className="dates">
        <div
          className={`check-in ${clickedButton === "check-in" ? "active" : ""}`}
          onClick={(e) => handleButtonClick("check-in", e)}
        >
          Check in
          <span>Add dates</span>
        </div>
        <div
          className={`check-out ${
            clickedButton === "check-out" ? "active" : ""
          }`}
          onClick={(e) => handleButtonClick("check-out", e)}
        >
          Check out
          <span>Add dates</span>
        </div>
      </div>
      <div
        className={`who-search ${clickedButton === "who" ? "active" : ""}`}
        onClick={(e) => handleButtonClick("who", e)}
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
  )
}
