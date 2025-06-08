import { Button, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaRegPlusSquare } from "react-icons/fa";
import { ColorModeButton } from "../ui/color-mode";
const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={'center'}
            justifyContent={'space-between'}
            flexDir={
                {
                    base: "column",
                    sm: "row"
                }
            } 
        >
            <Text
                fontSize={{base: "22", sm: "28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient="to-r"
                gradientFrom={"cyan.400"}
                gradientTo={"blue.500"}
                bgClip="text"
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>
            <HStack spaceX={2} spaceY={2} alignItems={"center"} justifyContent={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <Icon>
                            <FaRegPlusSquare />
                        </Icon>
                    </Button>
                </Link>
                <ColorModeButton />
            </HStack>
            
        </Flex>

    </Container>
  )
}

export default Navbar