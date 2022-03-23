import React, { useState } from "react"
import Menu from "../components/Menu"
import Categories from "../components/Categories"
import items from "../data"
const allCategories = ["all", ...new Set(items.map((item) => item.category))]

function RestaurantOffer() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  console.log(items)
  console.log(allCategories)
  return (
    <div className="explore">
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} />
          <Menu items={menuItems} />
        </section>
      </main>
    </div>
  )
}

export default RestaurantOffer
