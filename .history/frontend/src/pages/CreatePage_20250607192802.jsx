import { Container } from "@chakra-ui/react"
import { useState } from "react"


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: ""
  })
  return (
    <Container maxW={"container.sm"}>CreatePage</Container>
  )
}

export default CreatePage