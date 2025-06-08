import { Box,Container, Heading, VStack } from "@chakra-ui/react"
import { useState } from "react"
import {  useColorModeValue } from "../components/ui/color-mode"


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: ""
  })
  return (
    <Container maxW={"container.sm"}>
        <VStack
            spaceY={8}
        >
            <Heading 
                as={"h1"}
                size={"2xl"}
                textAlign={"center"}
                mb={8}
            >
                Create Product
            </Heading>
            <Box 
                w={"full"}
                bg={useColorModeValue("blue.100", "blue.900")}
                p={6}
                rounded={"lg"}
                shadow={"md"}
            >
            </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage