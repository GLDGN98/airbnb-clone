import React from "react"
import { Route, Routes } from "react-router"
import { AppHeader } from "./components/app-header"
import { StayIndex } from "./pages/stay-index"

export const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<StayIndex />} />
      </Routes>
    </div>
  )
}
