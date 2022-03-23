import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RestaurantOffer from "./pages/RestaurantOffer"
import Template from "./pages/Template"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/menu" element={<RestaurantOffer />} />
          <Route path="/template" element={<Template />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
