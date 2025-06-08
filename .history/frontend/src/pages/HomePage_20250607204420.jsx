import { Text, Container, VStack } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Container maxW='container.xl' py={12}>
        <VStack spacing={8}>
            <Text
                fontSize={"30px"} 
                fontWeight={"bold"}
                textAlign={"center"}
                bgGradient="to-r"
                gradientFrom={"cyan.400"}
                gradientTo={"blue.500"}
                bgClip="text"
            >
                Your Products 🥰
            </Text> 
        </VStack>
    </Container>
  )
}

export default HomePage