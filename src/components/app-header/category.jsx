import React from "react"

export const Category = ({ clickedButton, handleButtonClick }) => {
  return (
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
  )
}
