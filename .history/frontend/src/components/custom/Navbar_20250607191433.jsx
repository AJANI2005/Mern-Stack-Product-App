import { Box, Button, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FaRegPlusSquare } from "react-icons/fa";
import { ColorModeButton } from "../ui/color-mode";
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A component that renders a navbar with a title and a button to create a new product, 
 * as well as a button to toggle the color mode.
 * 

/*******  29363407-202f-45cf-b373-5848be5e7c0b  *******/
const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4} >
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
            <HStack spaceX={2} alignItems={"center"} justifyContent={"center"}>
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