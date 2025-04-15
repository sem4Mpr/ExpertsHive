import {
  Box,
  Grid,
  Flex,
  Image,
  Button,
  Spacer,
  Show,
  Hide,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Center,
  background
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Navbar() {

  const handleSideBar = () => {};

  return (
    <Flex
      w="full"
      alignItems="center"
      gap="2"
      p={5}
      pl="40px"
      pr="40px"
      justifyContent="space-between"
      bg="transparent"
    >
      {/* Logo */}
      <Box>
        <Link to="/">
          <h1 style={{fontSize: "25px", fontWeight: "1000px"}}>Experts<span style={{fontColor:"#0000"}}>Hive</span></h1>
        </Link>
      </Box>

      <Spacer />

      {/* Desktop View */}
      <Show breakpoint="(min-width: 1000px)">
        <Flex gap="5">
          <Center>
            <Link to="/blog">Blog</Link>
          </Center>
          <Center>
            <Link to="/register">Register As A Professional</Link>
          </Center>
          <Center>
            <Link to="/cart">
              <Button colorScheme="#ffff" variant="outline" size="sm" >
                Cart
              </Button>
            </Link>
          </Center> 
          <Center>
            <Login />
          </Center>
        </Flex>
      </Show>

      {/* Mobile View */}
      <Hide above="1000px">
        <Popover>
          <PopoverTrigger>
            <Button>
              <HamburgerIcon w={8} h={8} onClick={handleSideBar} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody color="black">
              <Grid gap="20px" p={8}>
                <Link to="/blog">Blog</Link>
                <Link to="/register">Register As A Professional</Link>
                <Link to="/cart">
                  <Button colorScheme="teal" variant="outline" size="sm" w="100%">
                    Cart
                  </Button>
                </Link>
                <Login />
              </Grid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Hide>

      <Box></Box>
    </Flex>
  );
}
