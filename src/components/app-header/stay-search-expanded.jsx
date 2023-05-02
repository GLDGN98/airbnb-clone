import React, { useState, useRef, useEffect } from "react"
import { DynamicModal } from "./dynamic-modal"
import { Category } from "./category"
import { StaySettings } from "./stay-settings"

export const StaySearchExpanded = ({
  staySearchExpanded,
  setStaySearchExpanded,
}) => {
  const [buttonCoords, setButtonCoords] = useState(null)
  const [staySettings, setStaySettings] = useState({})
  const [clickedButton, setClickedButton] = useState(null)

  const staySearchRef = useRef(null)

  function onSelectRegion(origin) {
    if (origin !== "i'm flexible") {
      setStaySettings((prev) => ({ ...prev, origin }))
    } else setStaySettings((prev) => ({ ...prev, origin: "" }))
    handleButtonClick("check-in")
  }

  function onSelectDate(selection, input) {
    if (input === "check-in") {
      setStaySettings((prev) => ({
        ...prev,
        startDate: new Date(selection.selection.startDate).toLocaleDateString(),
      }))
      setClickedButton("check-out")
    }
    if (input === "check-out") {
      setStaySettings((prev) => ({
        ...prev,
        endDate: new Date(selection.selection.endDate).toLocaleDateString(),
      }))
      setClickedButton("who")
    }
  }

  const updateCategoryAmount = (category, operation) => {
    const currentAmount = staySettings[category] || 0
    let categoryAmount
    if (operation === "+") {
      categoryAmount = currentAmount + 1
    } else {
      categoryAmount = currentAmount > 0 ? currentAmount - 1 : 0
    }
    const updatedSettings = {
      ...staySettings,
      [category]: categoryAmount,
    }
    setStaySettings(updatedSettings)
  }

  const handleButtonClick = (index, e) => {
    setClickedButton(index)
    const buttonRect = e?.target?.getBoundingClientRect()
    const buttonHeight = e?.target?.offsetHeight
    if (buttonRect && buttonHeight) {
      setButtonCoords({
        left: buttonRect.left + window.scrollX - e.target.offsetWidth / 2,
        top: buttonRect.top + window.scrollY + buttonHeight,
      })
    }
  }

  function handleSearch(ev) {
    ev.preventDefault()
    ev.stopPropagation()

    setStaySearchExpanded(false)
  }

  const closeModal = () => {
    setClickedButton(null)
  }

  return (
    <div className="stay-search-expanded" ref={staySearchRef}>
      <Category
        clickedButton={clickedButton}
        handleButtonClick={handleButtonClick}
      />
      <StaySettings
        handleSearch={handleSearch}
        clickedButton={clickedButton}
        handleButtonClick={handleButtonClick}
        staySettings={staySettings}
      />
      {clickedButton && (
        <DynamicModal
          updateCategoryAmount={updateCategoryAmount}
          setClickedButton={setClickedButton}
          onSelectRegion={onSelectRegion}
          input={clickedButton}
          buttonCoords={buttonCoords}
          closeModal={closeModal}
          setStaySettings={setStaySettings}
          staySettings={staySettings}
          onSelectDate={onSelectDate}
        />
      )}
    </div>
  )
}
