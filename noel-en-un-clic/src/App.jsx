


import Menu from './pages/Menu.jsx';


import React from "react"
import { Outlet } from "react-router-dom"


function App() {


  return (

    <Menu />

    <div>
      <Outlet />
    </div>

  )


export default App;
