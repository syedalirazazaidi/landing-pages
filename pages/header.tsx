import React from "react";
import {
  Flex,
  Box,
  HStack,
  Text,
  Button,
  Icon,
  Container,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <Flex
      width="100%"
      alignItems="center"
      textAlign="center"
      justifyContent="space-around"
      paddingTop="10px"
      fontWeight="500"
    >
      <Text>Hydro</Text>
      <Box mx={100} gap="60px" display="flex">
        <NextLink href="/home">Home</NextLink>
        <NextLink href="/about">About</NextLink>
        <NextLink href="/blog">Blog</NextLink>
        <NextLink href="/ourwork">Our Work</NextLink>
        <NextLink href="/contacts">Contacts</NextLink>
      </Box>
      <HStack spacing={4}>
        <Icon as={AiFillFacebook} />
        <Icon as={AiFillTwitterSquare} />
        <Icon as={AiFillInstagram} />
        <Button colorScheme="teal" variant="solid">
          Sign in / join
        </Button>
      </HStack>
    </Flex>
  );
};

export default Header;
