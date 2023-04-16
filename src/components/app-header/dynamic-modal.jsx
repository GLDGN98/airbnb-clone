import { SearchLocations } from "./dynamic-modal-cmps/search-locations"

export const DynamicModal = ({ input, closeModal }) => {
  if (input === "check-in") {
    return (
      <div className="modal">
        <h1>Check In Modal</h1>
        <button onClick={closeModal}>Close</button>
      </div>
    )
  } else if (input === "check-out") {
    return (
      <div className="modal">
        <h1>Check Out Modal</h1>
        <button onClick={closeModal}>Close</button>
      </div>
    )
  } else if (input === "who") {
    return (
      <div className="modal">
        <h1>Who Modal</h1>
        <button onClick={closeModal}>Close</button>
      </div>
    )
  } else if (input === "where") {
    return <SearchLocations />
  } else {
    return null
  }
}
