import { Box,Button,Container, Heading, Input, Toaster, VStack } from "@chakra-ui/react"
import { useState } from "react"
import {  useColorModeValue } from "../components/ui/color-mode"
import { useProductStore } from "../store/product"
import { set } from "mongoose"
import { toaster} from "../components/ui/toaster"

const CreatePage = () => {
  const {createProduct} = useProductStore();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: ""
  })
  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct);
    console.log(success, message);
    setNewProduct({
      name: "",
      price: 0,
      image: ""
    })
    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
    })
  }
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
                        border={"none"}
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                    <Input
                        border={"none"}
                        placeholder="Product Price"
                        type={"number"}
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                    <Input
                        border={"none"}
                        placeholder="Product Image"
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    />
                    <Button colorPalette="blue" onClick={handleAddProduct} w='full'>
                        Add Product
                    </Button>
                </VStack>
            </Box>
        </VStack>
        <Toaster />
    </Container>
  )
}

export default CreatePage