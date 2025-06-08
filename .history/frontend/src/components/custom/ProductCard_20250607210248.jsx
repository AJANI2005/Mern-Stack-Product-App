import { Box, Heading, HStack, IconButton, Image } from "@chakra-ui/react"
const ProductCard = ({product}) => {
  return (
    <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: 'scale(1.05)', shadow: 'xl' }}
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
                <IconButton icon={<EditIcon/>} onClick={onOpen} colorPalette={'blue'}/>
                <IconButton icon={<DeleteIcon/>} onClick={()=>handleDelete(product.id)} colorPalette={'blue'}/>
            </HStack>
        </Box>

    </Box>
  )
}

export default ProductCard;