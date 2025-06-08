import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Box, Button } from '@chakra-ui/react'

import CreatePage from './pages/CreatePage.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  return (
    <Box minH={"100vh"}>
        {/*Navbar*/}
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreatePage/>} />
        </Routes>
    </Box>
  )
}

export default App
