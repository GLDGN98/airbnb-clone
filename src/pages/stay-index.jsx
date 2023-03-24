import React, { useEffect, useRef, useState } from "react"
import { AppHeader } from "../components/app-header"
import { Filters } from "../components/filters"
import { StayList } from "../components/stay-list"
import { stayService } from "../services/stay-service"
import { utilService } from "../services/util.service"

const NUM_OF_SKELETONS = 20

export const StayIndex = () => {
  let [stays, setStays] = useState(getSkeletonStays())
  const [filterBy, setFilterBy] = useState(stayService.getEmptyFilterBy())
  const currentStayPagination = useRef(0)

  useEffect(() => {
    onGetNewStays()
  }, [])

  function onGetNewStays() {
    currentStayPagination.current = 0
    stays = []
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
    let newStays = await stayService.getStays(
      currentStayPagination.current,
      filterBy
    )
    // Clean all skeletons

    const filteredStays = stays.filter((stay) => stay.name)
    if (!newStays.length) {
      // No new stays so no need for skeletons
      setStays([...filteredStays, ...newStays])
    } else {
      setStays([...filteredStays, ...newStays, ...getSkeletonStays()])
      currentStayPagination.current++
    }
    // setFilterBy(stayService.getEmptyFilterBy())
  }

  return (
    <div className="stay-index">
      <Filters
        loadNewStays={onGetNewStays}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <StayList stays={stays} loadStays={loadStays} />
    </div>
  )
}
