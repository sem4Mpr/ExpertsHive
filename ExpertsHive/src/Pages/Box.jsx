import React from "react";
import { Box, Flex, Image, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Box1({ image, title, id }) {
  return (
    <Box
      w="100%"
      p={{ base: 0, lg: 2 }}
      _hover={{ bg: "#E2E8F0" }}
      variant="ghost"
      key={id}
    >
      <Link>
        <Center>
          <Image
            src={image}
            alt="logo"
            w={
              id == 2
                ? { base: "15%", lg: "24%" }
                : { base: "18%", lg: "30%" } && id == 8
                ? { base: "25%", lg: "40%" }
                : { base: "18%", lg: "30%" }
            }
          />
        </Center>
      </Link>
      <Text mt="15px">{title}</Text>
    </Box>
  );
}
