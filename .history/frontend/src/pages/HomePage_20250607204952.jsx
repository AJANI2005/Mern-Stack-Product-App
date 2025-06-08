import { Text, Container, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
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
                Your Products :)
            </Text> 
            <Text
                fontSize={"xl"} 
                fontWeight={"bold"}
                textAlign={"center"}
                color={"gray.500"}
                display={"flex"}
                justifyContent={"space-between"}
            >
                No Products Found :(
                <Link to={"/create"}>
                    <Text
                        as="span"
                        color="blue.500"
                        _hover={{
                            textDecoration: "underline",}}
                    >
                        Create a product
                    </Text>
                </Link>
            </Text>
        </VStack>
    </Container>
  )
}

export default HomePage