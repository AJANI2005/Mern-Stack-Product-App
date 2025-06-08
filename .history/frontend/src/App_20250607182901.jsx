import { Box, Text } from '@chakra-ui/react'
function App() {
  return (
    <>
      <Box 
          bgGradient="to-r" 
          gradientFrom="red.100" 
          gradientTo="blue.200"
          bgClip={'text'}
          >
          <Text 
              fontSize={'4xl'}
              fontWeight={'bold'}
          >Button 1</Text>
      </Box>
    </>
  )
}
export default App
