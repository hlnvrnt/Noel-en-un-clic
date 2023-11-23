import React from "react"
import { Outlet } from "react-router-dom"
import Home from "./components/Home";


function App() {


  return (
    <div>
      <Outlet />
    </div>

  )
}


export default App;
