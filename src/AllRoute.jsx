import React from 'react'
import Cab from './Components/Cab';
import CallCabDriver from './Components/CallCabDriver';
import { Routes, Route } from "react-router-dom";

function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cab/>}/>
        <Route path="/CallCabDriver" element={<CallCabDriver/>}/>
      </Routes>
    </div>
  )
}

export default AllRoute
