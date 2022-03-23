import React, { useState } from "react"
import Menu from "../components/Menu"
import Categories from "../components/Categories"
import items from "../data"

function RestaurantOffer() {
  const [menuItems, setMenuItems] = useState(items)

  console.log(items)
  return (
    <div className="explore">
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Menu items={menuItems} />
        </section>
      </main>
    </div>
  )
}

export default RestaurantOffer
