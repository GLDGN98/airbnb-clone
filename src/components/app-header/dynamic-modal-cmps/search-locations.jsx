import React from "react"
import regionImgAll from "../../../assets/img/regions/all.webp"
import regionImgME from "../../../assets/img/regions/middle-east.webp"
import regionImgIT from "../../../assets/img/regions/italy.webp"
import regionImgFR from "../../../assets/img/regions/france.webp"
import regionImgSA from "../../../assets/img/regions/south-america.webp"
import regionImgUSA from "../../../assets/img/regions/usa.webp"

export const SearchLocations = ({ buttonCoords }) => {
  const regions = [
    { label: "i'm flexible", img: regionImgAll },
    { label: "middle east", img: regionImgME },
    { label: "italy", img: regionImgIT },
    { label: "south america", img: regionImgSA },
    { label: "france", img: regionImgFR },
    { label: "united states", img: regionImgUSA },
  ]
  return (
    <section style={buttonCoords} className="search-module search-location">
      <h4 className="title">Search by region</h4>
      <div className="wrapper">
        <ul className="regions">
          {regions.map((r) => {
            return (
              <div
                key={r.label}
                className="region"
                // onClick={() => onSelectRegion(r.label)}
              >
                <img
                  src={r.img}
                  alt=""
                  // className={`region-img ${
                  //   searchBy.destination === r.label ? "active" : ""
                  // }`}
                />
                <p className="label">{r.label}</p>
              </div>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
