import React from "react";
import {
  Flex,
  Box,
  HStack,
  Text,
  Button,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const Header = () => {
  const [show, setShow] = React.useState(false);

  const toggleMenu = () => setShow(!show);
  return (
    <Flex
      width={["950px", "full"]}
      alignItems="center"
      textAlign="center"
      justifyContent={["space-around", "space-around", "space-around"]}
      paddingTop="10px"
      fontWeight="500"
      marginLeft={["7px", "0px", "0px"]}
      px={["10px", "150px", "150px"]}
      direction={["column", "row", "row"]}
    >
      <Box display="flex" gap={["700px", 0, 0]} py="28px">
        <Box>
          <Text fontWeight="600" fontSize="30px">
            Hydro
          </Text>
        </Box>
        <Box gap={48}>
          <IconButton
            onClick={toggleMenu}
            aria-label="Open Menu"
            size="lg"
            fontSize={40}
            icon={show ? <CloseIcon /> : <HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
          />
        </Box>
      </Box>
      <Box
        alignItems="center"
        textAlign="center"
        my="10px"
        fontWeight="500"
        fontSize={["30px", "20px"]}
        display={{ base: show ? "column" : "none", md: "flex" }}
      >
        <Box
          mx={[20, 100, 100]}
          gap="60px"
          display="flex"
          flexDirection={["column", "row", "row"]}
        >
          <NextLink href="/home">Home</NextLink>
          <NextLink href="/about">About</NextLink>
          <NextLink href="/blog">Blog</NextLink>
          <NextLink href="/ourwork">Our Work</NextLink>
          <NextLink href="/contacts">Contacts</NextLink>
        </Box>
        <HStack spacing={4} py={["16", 0, 0]}>
          <Icon as={AiFillFacebook} />
          <Icon as={AiFillTwitterSquare} />
          <Icon as={AiFillInstagram} />
          <Button colorScheme="teal" variant="solid">
            Sign in / join
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Header;
