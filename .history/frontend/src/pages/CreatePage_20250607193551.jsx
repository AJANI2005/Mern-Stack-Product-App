import { Box,Container, Heading, Input, VStack } from "@chakra-ui/react"
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
                <VStack
                    spacing={4}
                >
                    <Input
                        borderColor={useColorModeValue("blue.100", "blue.900")}
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                    <Input
                        borderColor={useColorModeValue("blue.100", "blue.900")}
                        placeholder="Product Price"
                        type={"number"}
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                    <Input
                        borderColor={useColorModeValue("blue.100", "blue.900")}
                        placeholder="Product Image"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    />
                </VStack>
            </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage