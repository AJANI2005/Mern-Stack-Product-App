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
            <Heading>
                Create Product
            </Heading>
        </VStack>
    </Container>
  )
}

export default CreatePage