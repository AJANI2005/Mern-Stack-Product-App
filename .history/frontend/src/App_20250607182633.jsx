import {Box, Button, HStack } from "@chakra-ui/react"

function App() {
  return (
    <>
      <Box bgGradient="to-r" gradientFrom="red.200" gradientTo="blue.200">
          <Button colorScheme="red">Button 1</Button>
          <Button colorScheme="green">Button 2</Button>
          <Button colorScheme="blue">Button 3</Button>
      </Box>
    </>
  )
}
export default App
