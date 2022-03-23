import React from "react"
import { useNavigate } from "react-router-dom"

function AppNavBar() {
  const navigate = useNavigate()
  return (
    <nav className="menu-item">
      <ul>
        <li onClick={() => navigate("/menu")}>
          <img
            src="./images/RestaurantOffer.png"
            alt="restaurant offer"
            className="navImage"
          />
          Restaurant Menu
        </li>
        <li onClick={() => navigate("/template")}>
          <img
            src="./images/imageHolder.png"
            alt="restaurant offer"
            className="navImage"
          />
          Template
        </li>
      </ul>
    </nav>
  )
}

export default AppNavBar
