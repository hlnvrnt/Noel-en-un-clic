// import React from "react"
import { Outlet } from "react-router-dom"
import Wishlist from "./pages/Wishlist";


function App() {


  return (
    <div>
		<Wishlist />
      <Outlet />
    </div>

  )
}


export default App;
