import React, { useEffect, useState } from "react"
import { AppLogo } from "./app-header/app-logo"
import { StaySearch } from "./app-header/stay-search"
import { UserSection } from "./app-header/user-section"
import { Filters } from "./filters"

export const AppHeader = () => {
  return (
    <div className="app-header">
      <AppLogo />
      <StaySearch />
      <UserSection />
    </div>
  )
}
