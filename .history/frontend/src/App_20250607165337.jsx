import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Box, Button } from '@chakra-ui/react'
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
