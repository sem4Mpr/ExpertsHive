import { useCart } from "../../Context/CartContextProvider";
import { Box, Button, Text, VStack, HStack, Flex, Divider, Heading, IconButton } from "@chakra-ui/react";
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, totalPrice, removeFromCart, updateQuantity } = useCart();

  return (
    <Box p={{ base: 4, md: 8 }} maxW="container.lg" mx="auto">
      <Heading as="h1" fontSize="3xl" mb={6} color="teal.600">
        Your Shopping Cart
      </Heading>
      
      {cartItems.length === 0 ? (
        <Box textAlign="center" py={10}>
          <Text fontSize="xl" color="gray.500">Your cart is empty</Text>
          <Button colorScheme="teal" mt={4} as="a" href="/">
            Browse Services
          </Button>
        </Box>
      ) : (
        <>
          <VStack spacing={6} align="stretch">
            {cartItems.map((item) => (
              <Box 
                key={item.id} 
                p={5} 
                borderWidth="1px" 
                borderRadius="lg" 
                boxShadow="sm"
                bg="white"
                _hover={{ boxShadow: "md" }}
                transition="all 0.2s"
              >
                <Flex justify="space-between" direction={{ base: "column", md: "row" }} gap={4}>
                  <Box flex="1">
                    <Text fontSize="lg" fontWeight="semibold" color="teal.700">{item.name}</Text>
                    <Text fontSize="sm" color="gray.600" mt={1}>{item.service}</Text>
                  </Box>
                  
                  <Flex align="center" gap={4}>
                    <HStack spacing={3}>
                      <IconButton 
                        icon={<MinusIcon />} 
                        size="sm" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                        isDisabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      />
                      <Text minW="30px" textAlign="center">{item.quantity}</Text>
                      <IconButton 
                        icon={<AddIcon />} 
                        size="sm" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      />
                    </HStack>
                    
                    <Text fontWeight="bold" minW="100px" textAlign="right">
                      ₹{item.price * item.quantity}
                    </Text>
                    
                    <IconButton
                      icon={<DeleteIcon />}
                      colorScheme="red"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    />
                  </Flex>
                </Flex>
              </Box>
            ))}
          </VStack>
          
          <Divider my={6} />
          
          <Flex justify="flex-end" mb={6}>
            <Box 
              p={5} 
              borderWidth="1px" 
              borderRadius="lg" 
              bg="teal.50"
              minW={{ base: "full", md: "300px" }}
            >
              <Text fontSize="xl" fontWeight="bold" mb={2} textAlign="right">
                Total: ₹{totalPrice}
              </Text>
              <Link to="/cart/payment">
              <Button 
                colorScheme="teal" 
                size="lg" 
                w="full"
                mt={2}
              >
                Proceed to Checkout
              </Button>
              </Link>
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
}