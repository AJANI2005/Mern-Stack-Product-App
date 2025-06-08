import { Box, Heading, HStack, IconButton, Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const ProductCard = ({product}) => {
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: 'scale(1.05)', shadow: 'xl' }}
        bg={bg}
    >
        <Image
            src={product.image}
            alt={product.name}
            objectfit='cover'
            h='48px'
            w='full'
        />
        <Box p={4}
        >
            <Heading
                as='h3'
                size='md'
                mb={2}
            >
                {product.name}
            </Heading>
            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>
            <HStack>
                <IconButton icon={<FaEdit/>} onClick={onOpen} colorPalette={'blue'}/>
                <IconButton icon={<MdDelete/>} onClick={()=>handleDelete(product.id)} colorPalette={'red'}/>
            </HStack>
        </Box>

    </Box>
  )
}

export default ProductCard;