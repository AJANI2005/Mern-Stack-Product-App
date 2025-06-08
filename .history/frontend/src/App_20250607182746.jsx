import { Box, Text } from '@chakra-ui/react'
function App() {
  return (
    <>
      <Box 
          bgGradient="to-r" 
          gradientFrom="red.200" 
          gradientTo="blue.200"
          >
          <Text color="black">Button 1</Text>
      </Box>
    </>
  )
}
export default App
