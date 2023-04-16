import React, { useState } from "react"
import { DynamicModal } from "./dynamic-modal"
import { Category } from "./category"
import { StaySettings } from "./stay-settings"

export const StaySearchExpanded = ({ staySearchExpanded }) => {
  const [clickedButton, setClickedButton] = useState(null)
  const [buttonCoords, setButtonCoords] = useState(null)

  const handleButtonClick = (index, e) => {
    setClickedButton(index)
    const buttonRect = e.target.getBoundingClientRect()
    setButtonCoords({
      left: buttonRect.left + window.scrollX - 35,
      top: buttonRect.top + window.scrollY + 30,
    })
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
      <Category
        clickedButton={clickedButton}
        handleButtonClick={handleButtonClick}
      />
      <StaySettings
        clickedButton={clickedButton}
        handleButtonClick={handleButtonClick}
      />
      {clickedButton && (
        <DynamicModal
          input={clickedButton}
          buttonCoords={buttonCoords}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}
