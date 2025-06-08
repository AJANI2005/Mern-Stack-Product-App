import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box, Button } from '@chakra-ui/react'

import CreatePage from './pages/CreatePage.jsx'
import HomePage from './pages/HomePage.jsx'
import Navbar from './components/custom/Navbar.jsx'

function App() {
  return (
    <Box minH={"100vh"}>
        {/*Navbar*/}
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreatePage/>} />
        </Routes>
    </Box>
  )
}

export default App
