import { Box, Container, Flex } from "@chakra-ui/react"

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

            </Text>
        </Flex>

    </Container>
  )
}

export default Navbar