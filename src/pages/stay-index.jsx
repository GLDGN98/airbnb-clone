import React, { useEffect, useState } from "react"
import { StayList } from "../components/stay-list"
import { stayService } from "../services/stay-service"

export const StayIndex = () => {
  const [stays, setStays] = useState([])

  useEffect(() => {
    loadStays()
  }, [])

  async function loadStays() {
    const demoStays = await stayService.query()
    setStays(demoStays)
  }

  return (
    <div className="stay-index">
      <StayList stays={stays} />
    </div>
  )
}
