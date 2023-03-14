import React from "react"
import { Route, Routes } from "react-router"
import { StayIndex } from "./pages/stay-index"

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<StayIndex />} />
      </Routes>
    </div>
  )
}
