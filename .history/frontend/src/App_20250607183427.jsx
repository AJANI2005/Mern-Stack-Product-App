import { Route, Routes } from "react-router-dom"
import Navbar from "./components/custom/Navbar"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  )
}
export default App
