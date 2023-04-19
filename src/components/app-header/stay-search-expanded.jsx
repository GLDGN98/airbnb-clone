import React, { useState } from "react"
import { DynamicModal } from "./dynamic-modal"
import { Category } from "./category"
import { StaySettings } from "./stay-settings"

export const StaySearchExpanded = ({ staySearchExpanded }) => {
  const [clickedButton, setClickedButton] = useState(null)
  const [buttonCoords, setButtonCoords] = useState(null)
  const [staySettings, setStaySettings] = useState({})

  function onSelectRegion(origin) {
    if (origin !== "i'm flexible") {
      setStaySettings((prev) => ({ ...prev, origin }))
    } else setStaySettings((prev) => ({ ...prev, origin: "" }))
    handleButtonClick("check-in")
  }

  const handleButtonClick = (index, e) => {

    setClickedButton(index)

    const buttonRect = e.target.getBoundingClientRect()
    console.log(buttonRect)
    const buttonHeight = e.target.offsetHeight
    setButtonCoords({
      left: buttonRect.left + window.scrollX - e.target.offsetWidth / 2,
      top: buttonRect.top + window.scrollY + buttonHeight,
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
        staySettings={staySettings}
      />
      {clickedButton && (
        <DynamicModal
          onSelectRegion={onSelectRegion}
          input={clickedButton}
          buttonCoords={buttonCoords}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}
