import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore"
import Template from "./pages/Template"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/template" element={<Template />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
