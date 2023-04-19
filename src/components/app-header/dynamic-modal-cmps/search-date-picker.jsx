import { DateRangePicker } from "react-date-range"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

export const SearchDatePicker = ({ buttonCoords }) => {
  return (
    <section style={buttonCoords} className="search-module search-date-picker">
      <DateRangePicker
        ranges={[
          {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
          },
        ]}
        minDate={new Date()}
        rangeColors={["#ff385c"]}
        showMonthAndYearPickers={false}
        showDateDisplay={false}
      />
    </section>
  )
}
