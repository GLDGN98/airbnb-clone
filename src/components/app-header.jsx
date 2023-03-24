import React, { useEffect, useState } from "react"
import { AppLogo } from "./app-header/app-logo"
import { StaySearch } from "./app-header/stay-search"
import { Filters } from "./filters"

export const AppHeader = () => {
  return (
    <div className="app-header">
      <AppLogo />
      <StaySearch />
    </div>
  )
}
