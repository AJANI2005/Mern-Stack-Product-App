import { Route, Routes } from "react-router-dom"
import Navbar from "./components/custom/Navbar"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import { Box } from "@chakra-ui/react"
import { useColorModeValue } from "./components/ui/color-mode"
import { Toaster } from "./components/ui/toaster"

import "./App.css"
function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("blue.100", "blue.900")} >

      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}
export default App
