import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.scss"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home.jsx";
import MovieCalendar from "./pages/MovieCalendar.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Menu from "./pages/Menu.jsx";
import SendLetter from "./pages/SendLetter.jsx";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "moviecalendar",
          element: <MovieCalendar />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },

        {
          path: "sendletter",
          element: <SendLetter />,
        },
        {
          path: "menu",
          element: <Menu />,
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
