import { Route, Routes } from "react-router-dom"
import Navbar from "./components/custom/Navbar"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import { Box, Toaster } from "@chakra-ui/react"
import { useColorModeValue } from "./components/ui/color-mode"
import "./App.css"
function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("blue.100", "blue.900")} >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      <Toaster/>
    </Box>
  )
}
export default App
