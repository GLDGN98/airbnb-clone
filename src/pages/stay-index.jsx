import React, { useEffect, useRef, useState } from "react"
import { AppHeader } from "../components/app-header"
import { StayList } from "../components/stay-list"
import { stayService } from "../services/stay-service"
import { utilService } from "../services/util.service"

const NUM_OF_SKELETONS = 20

export const StayIndex = () => {
  const [stays, setStays] = useState(getSkeletonStays())
  const [isLoading, setIsLoading] = useState(false)
  const currentStayPagination = useRef(0)

  useEffect(() => {
    onGetNewStays()
  }, [])

  function onGetNewStays() {
    currentStayPagination.current = 0
    setStays([])
    setStays(getSkeletonStays())
    loadStays()
  }

  function getSkeletonStays() {
    const res = []
    for (let i = 0; i < NUM_OF_SKELETONS; i++) {
      res.push({ type: "skeleton", _id: utilService.makeId() })
    }
    return res
  }

  async function loadStays() {
    let newStays = await stayService.getStays(currentStayPagination.current)
    // Clean all skeletons
    const filteredStays = stays.filter((stay) => stay.name)
    if (!newStays.length) {
      // No new stays so no need for skeletons
      setStays([...filteredStays, ...newStays])
    } else {
      setStays([...filteredStays, ...newStays, ...getSkeletonStays()])
      currentStayPagination.current++
    }
  }

  return (
    <div className="stay-index">
      <AppHeader />
      <StayList stays={stays} isLoading={isLoading} loadStays={loadStays} />
    </div>
  )
}
