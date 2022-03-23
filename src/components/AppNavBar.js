import React from "react"
import { useNavigate } from "react-router-dom"

function AppNavBar() {
  const navigate = useNavigate()
  return (
    <nav>
      <ul>
        <li onClick={() => navigate("/menu")}>
          <img
            src="./images/RestaurantOffer.png"
            alt="restaurant offer"
            className="navImage"
          ></img>
          Restaurant Menu
        </li>
        <li onClick={() => navigate("/template")}>Template</li>
      </ul>
    </nav>
  )
}

export default AppNavBar
