
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
    </Box>
  )
}

export default ProductCard