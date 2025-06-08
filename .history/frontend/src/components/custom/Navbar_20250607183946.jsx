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
                fontSize={'2xl'} 
            >
                    sdsdsd
            </Text>
        </Flex>

    </Container>
  )
}

export default Navbar