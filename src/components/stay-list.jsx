import React from "react"
import { StayPreview } from "./stay-preview"

export const StayList = ({ stays }) => {
  return (
    <div className="stay-list">
      <ul>
        {stays.map((stay) => {
          return (
            <li>
              <StayPreview stay={stay} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
