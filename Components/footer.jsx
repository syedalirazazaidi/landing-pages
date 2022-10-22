import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box
     
      display="flex"
      mx={12}
      justifyContent="space-evenly"
      marginBottom={16}
    >
      <Box>
        <Heading fontSize={18}>Hydro Company</Heading>
        <Text w="410px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
      <Box>
        <Heading fontSize={18}>Company</Heading>
        <Text>About Us</Text>
        <Text>Join our team</Text>
        <Text>Read Blog</Text>
        <Text>Press</Text>
      </Box>
      <Box>
        <Heading fontSize={18}>Services</Heading>
        <Text>Pricing</Text>
        <Text>Documentation</Text>
        <Text>Support</Text>
      </Box>
      <Box>
        <Heading fontSize={18}>Find us</Heading>
        <Text>123 Grand Rama IX,</Text>
        <Text>Krung Thep Maha Nakhon 10400</Text>
      </Box>
    </Box>
  );
};

export default Footer;
