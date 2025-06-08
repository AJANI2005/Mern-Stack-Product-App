import { Text, Container, VStack, SimpleGrid } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useProductStore } from "../store/product"
import { useEffect } from "react"
import ProductCard from "../components/custom/ProductCard"

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
        fetchProducts();
  },[])
  console.log(products)
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

            <SimpleGrid
                columns={
                    {
                        base: 1,
                        md: 2,
                        lg:3 
                    }
                }
                spaceX = {10}
                spaceY = {10}
                w={"full"}
            >
                {
                    products.map((product)=>{
                        return <ProductCard key={product._id} product={product} />
                    })
                }
            </SimpleGrid>




            <Text
                fontSize={"xl"} 
                fontWeight={"bold"}
                textAlign={"center"}
                color={"gray.500"}
            >
                No Products Found :(
                <Link to={"/create"}>
                    <Text
                        ml={10}
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