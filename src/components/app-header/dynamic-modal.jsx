import { SearchDatePicker } from "./dynamic-modal-cmps/search-date-picker"
import { SearchLocations } from "./dynamic-modal-cmps/search-locations"
import { SearchWho } from "./dynamic-modal-cmps/search-who"

export const DynamicModal = ({
  input,
  buttonCoords,
  onSelectRegion,
  handleButtonClick,
  onSelectDate,
  staySettings,
  updateCategoryAmount,
}) => {
  if (input === "check-in") {
    return (
      <SearchDatePicker
        onSelectDate={onSelectDate}
        staySettings={staySettings}
        buttonCoords={buttonCoords}
        handleButtonClick={handleButtonClick}
        input={input}
      />
    )
  } else if (input === "check-out") {
    return (
      <SearchDatePicker
        input={input}
        staySettings={staySettings}
        onSelectDate={onSelectDate}
        handleButtonClick={handleButtonClick}
        buttonCoords={buttonCoords}
      />
    )
  } else if (input === "who") {
    return (
      <SearchWho
      updateCategoryAmount={updateCategoryAmount}
        staySettings={staySettings}
        buttonCoords={buttonCoords}
      />
    )
  } else if (input === "where") {
    return <SearchLocations onSelectRegion={onSelectRegion} />
  } else {
    return null
  }
}
