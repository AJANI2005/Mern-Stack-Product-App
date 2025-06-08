import { 
    Button,
    Container, 
    Flex,
    HStack,
    Text
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Icon } from "@chakra-ui/react"
import { FiPlusSquare } from "react-icons/fi";
import { Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={
                { base: "column", sm: "row"}
            }
        >
              <Box textAlign="center">
                  <Heading
                      bgClip="text"
                      bgGradient="linear(to-r, #ff005a, #0a60eb)">
                      Chakra UI Gradient | GeeksForGeeks
                  </Heading>
              </Box>
            <Text 
                fontSize={{base: "22", sm: "28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient= {"linear(to-r, cyan.400, blue.500)"}
                bgClip={"text"}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <Icon fontSize={20}>
                            <FiPlusSquare />
                        </Icon>
                    </Button>
                </Link>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar