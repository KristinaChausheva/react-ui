import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import RestaurantOffer from "./pages/Menu/RestaurantOffer"
import Bud from "./pages/GroceryBud/Bud"
import Template from "./pages/Template"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<RestaurantOffer />} />
          <Route path="/grocery-bud" element={<Bud />} />
          <Route path="/template" element={<Template />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
