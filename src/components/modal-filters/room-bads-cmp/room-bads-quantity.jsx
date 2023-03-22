import React, { useEffect, useState } from "react"

export const RoomBadsQuantity = ({ setFilterBy, filterBy, field }) => {
  const [lastClickedButton, setLastClickedButton] = useState(null)

  useEffect(() => {
    if (!filterBy.stayDetails[field]) {
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
      } else {
        button.style.backgroundColor = null
        button.style.color = null
      }
    })
  }, [filterBy.stayDetails, field])

  const handleButtonClick = (event, i) => {
    if (i === undefined) i = ""
    // remove the black background color from the previously clicked button
    if (lastClickedButton !== null) {
      lastClickedButton.style.backgroundColor = null
      lastClickedButton.style.color = null
    }

    // add the black background color to the clicked button
    const button = event.target
    button.style.backgroundColor = "black"
    button.style.color = "white"

    // update the last clicked button state
    setLastClickedButton(button)

    let { name } = event.target

    setFilterBy((prev) => ({
      ...prev,
      stayDetails: { ...prev.stayDetails, [name]: i },
    }))
    // handle button click event here
  }

  const buttons = []
  buttons.push(
    <button
      name={field}
      className="any"
      key="any"
      onClick={handleButtonClick}
      style={{
        backgroundColor: lastClickedButton === null ? "black" : null,
        color: lastClickedButton === null ? "white" : null,
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
