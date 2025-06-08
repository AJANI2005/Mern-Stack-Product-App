import { Container, Heading, VStack } from "@chakra-ui/react"
import { useState } from "react"


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
            >

            </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage