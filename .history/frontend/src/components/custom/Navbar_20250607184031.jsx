import { Container, Flex, Text } from "@chakra-ui/react"

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
                
            >
                    sdsdsd
            </Text>
        </Flex>

    </Container>
  )
}

export default Navbar