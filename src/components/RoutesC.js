import React from "react"

import { Routes, Route } from "react-router-dom"
import { Add } from "./Add"
import { Watched } from "./Watched"
import { WatchList } from "./WatchList"

export const RoutesC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  )
}
