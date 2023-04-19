import { SearchDatePicker } from "./dynamic-modal-cmps/search-date-picker"
import { SearchLocations } from "./dynamic-modal-cmps/search-locations"

export const DynamicModal = ({
  input,
  buttonCoords,
  closeModal,
  onSelectRegion,
}) => {
  if (input === "check-in") {
    return <SearchDatePicker buttonCoords={buttonCoords} />
  } else if (input === "check-out") {
    return <SearchDatePicker buttonCoords={buttonCoords} />
  } else if (input === "who") {
    return (
      <div className="modal">
        <h1>Who Modal</h1>
        <button onClick={closeModal}>Close</button>
      </div>
    )
  } else if (input === "where") {
    return (
      <SearchLocations
        onSelectRegion={onSelectRegion}
        buttonCoords={buttonCoords}
      />
    )
  } else {
    return null
  }
}
