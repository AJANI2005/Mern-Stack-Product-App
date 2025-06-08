import { Box, Heading, HStack, IconButton, Image } from "@chakra-ui/react"
import { Text, VStack,Input } from "@chakra-ui/react"

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { useColorModeValue } from "../ui/color-mode";
import { useProductStore } from "../../store/product";
import {toaster} from "../ui/toaster";

import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import { useState } from "react";


const ProductCard = ({product}) => {
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const bg = useColorModeValue('white', 'gray.800');
  const { deleteProduct } = useProductStore();
  const [updatedProduct, setUpdatedProduct] = useState(product);



  const handleDeleteProduct = async (pid) => {
    const {success, message} = await deleteProduct(pid);
    if (success) {
        toaster.create({
            title: "Success",
            description: message,
        })
    }else{
        toaster.create({
            title: "Error",
            description: message,
        })
    }
  }

  // Edit Dialog Box
  const [openEditDialog, setOpenEditDialog] = useState(false)
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
            h='48'
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
                <IconButton onClick={()=>{setOpenEditDialog(true)}} colorPalette={'blue'}>
                    <FaEdit/>
                </IconButton>
                <IconButton onClick={()=>{handleDeleteProduct(product._id)}} colorPalette={'red'}>
                    <MdDelete/>
                </IconButton>
            </HStack>
        </Box>
          <Dialog.Root lazyMount open={openEditDialog} onOpenChange={(e) => setOpenEditDialog(e.open)}>
              <Dialog.Trigger/> 
              <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                      <Dialog.Content>
                          <Dialog.Header>
                              <Dialog.Title>Edit Product Details</Dialog.Title>
                          </Dialog.Header>
                          <Dialog.Body>
                              {/* Inputs for the box go here */}
                              <VStack
                                  spacing={4}
                              >
                                  <Input
                                      border={"none"}
                                      placeholder="Product Name"
                                      value={updatedProduct.name}
                                      onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                                  />
                                  <Input
                                      border={"none"}
                                      placeholder="Product Price"
                                      type={"number"}
                                      value={updatedProduct.price}
                                      onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                                  />
                                  <Input
                                      border={"none"}
                                      placeholder="Product Image"
                                      value={updatedProduct.image}
                                      onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                                  />
                              </VStack>
                          </Dialog.Body>
                          <Dialog.Footer>
                              <Dialog.ActionTrigger asChild>
                                  <Button variant="outline">Cancel</Button>
                              </Dialog.ActionTrigger>
                              <Button>Save</Button>
                          </Dialog.Footer>
                          <Dialog.CloseTrigger asChild>
                              <CloseButton size="sm" />
                          </Dialog.CloseTrigger>
                      </Dialog.Content>
                  </Dialog.Positioner>
              </Portal>
          </Dialog.Root> 
        </Box>
    )
}

export default ProductCard;