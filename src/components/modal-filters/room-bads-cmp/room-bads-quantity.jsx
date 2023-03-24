import React, { useEffect, useState } from "react"

export const RoomBadsQuantity = ({ setFilterBy, filterBy, field }) => {
  const [lastClickedButton, setLastClickedButton] = useState(null)

  useEffect(() => {
    if (typeof filterBy.stayDetails[field] === "undefined") {
      setLastClickedButton(null)
      return
    }

    const clickedButtonIndex = parseInt(filterBy.stayDetails[field])
    const buttons = document.querySelectorAll(`button[name="${field}"]`)
    buttons.forEach((button, index) => {
      if (index === clickedButtonIndex) {
        button.style.backgroundColor = "black"
        button.style.color = "white"
        setLastClickedButton(button)
      }
    })
  }, [filterBy, field])

  function ButtonIsAny(name, btn, index) {
    if (index === undefined) {
      btn.style.backgroundColor = "black"
      btn.style.color = "white"
      setFilterBy((prev) => ({
        ...prev,
        stayDetails: { ...prev.stayDetails, [name]: "" },
      }))
    } else {
      btn.style.backgroundColor = null
      btn.style.color = null
    }
  }

  function handleLastButtonClicked(name, btn, index) {
    if (lastClickedButton !== null) {
      lastClickedButton.style.backgroundColor = null
      lastClickedButton.style.color = null
    }

    setLastClickedButton(btn)

    if (index) {
      setFilterBy((prev) => ({
        ...prev,
        stayDetails: { ...prev.stayDetails, [name]: index },
      }))
    }
  }

  const handleButtonClick = (event, i) => {
    let { name } = event.target
    const button = event.target
    ButtonIsAny(name, button, i)
    handleLastButtonClicked(name, button, i)
  }

  const buttons = []
  buttons.push(
    <button
      name={field}
      className="any"
      key="any"
      onClick={handleButtonClick}
      style={{
        backgroundColor:
          typeof filterBy.stayDetails[field] === "undefined" &&
          lastClickedButton === null
            ? "black"
            : null,
        color:
          typeof filterBy.stayDetails[field] === "undefined" &&
          lastClickedButton === null
            ? "white"
            : null,
      }}
    >
      Any
    </button>
  )
  for (let i = 1; i <= 8; i++) {
    buttons.push(
      <button name={field} key={i} onClick={(ev) => handleButtonClick(ev, i)}>
        {i}
      </button>
    )
  }

  return <div className="room-bads-quantity">{buttons}</div>
}
