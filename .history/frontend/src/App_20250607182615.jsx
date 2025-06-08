import {Box, Button, HStack } from "@chakra-ui/react"

function App() {
  return (
    <>
      <Box bgGradient="to-r" gradientFrom="red.200" gradientTo="blue.200">
        <HStack spacing="4">
          <Button colorScheme="red">Button 1</Button>
          <Button colorScheme="green">Button 2</Button>
          <Button colorScheme="blue">Button 3</Button>
        </HStack>
      </Box>
    </>
  )
}
export default App
