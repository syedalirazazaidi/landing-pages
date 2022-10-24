import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Box
      display="flex"
      mx={12}
      justifyContent={["left", "space-evenly"]}
      flexWrap={["wrap", "nowrap", "nowrap"]}
      marginBottom={16}
      alignContent="center"
    >
      <Box alignItems="center" textAlign="center" marginTop="20px">
        <Heading fontSize={[46, 18, 18]}>Hydro Company</Heading>
        <Text w="410px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
      <Box
        alignItems="center"
        textAlign="center"
        my="20px"
        marginLeft={["80px", "0px", "0px"]}
      >
        <Heading fontSize={[46, 18, 18]}>Company</Heading>
        <Text>About Us</Text>
        <Text>Join our team</Text>
        <Text>Read Blog</Text>
        <Text>Press</Text>
      </Box>
      <Box
        alignItems="center"
        textAlign="center"
        my="20px"
        marginLeft={["130px", "0px", "0px"]}
      >
        <Heading fontSize={[32, 18, 18]}>Services</Heading>
        <Text>Pricing</Text>
        <Text>Documentation</Text>
        <Text>Support</Text>
      </Box>
      <Box
        alignItems="center"
        textAlign="center"
        my="20px"
        marginLeft={["90px", "0px", "0px"]}
      >
        <Heading fontSize={[32, 18, 18]}>Find us</Heading>
        <Text>123 Grand Rama IX,</Text>
        <Text>Krung Thep Maha Nakhon 10400</Text>
      </Box>
    </Box>
  );
};

export default Footer;
