
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
            fit='cover'
            h='200px'
            w='100%'
        />
    </Box>
  )
}

export default ProductCard