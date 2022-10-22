import React from "react";
import {
  FormControl,
  Container,
  Textarea,
  Box,
  HStack,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
const Contactus = () => {
  return (
    <Box mx="64px">
      <Text py={16} fontSize={32} textAlign="center" alignItems="center">
        Contact us
      </Text>
      <Box display="flex" justifyContent="space-around" marginBottom="50px">
        <Box>
          <FormControl marginRight="300px">
            <HStack width="700px" gap={8} marginBottom="20px">
              <Input type="text" placeholder="Full Name" />
              <Input type="text" placeholder="Full Name" />
            </HStack>
            <HStack width="700px" gap={8}>
              <Input type="text" placeholder="Full Name" />
              <Input type="text" placeholder="Full Name" />
            </HStack>
            <Box py="10px">
              <Textarea
                placeholder="Here is a sample placeholder"
                size="sm"
                width="700px"
              />
            </Box>
            <Button px={10} py={6} bg='red.200' color='whiteAlpha.800'>Send Message</Button>
          </FormControl>
        </Box>

        <Box
          width="480px"
          marginTop="-10px"
          h="230px"
          as="iframe"
          src="https://www.google.com/maps/embed"
        />
      </Box>
    </Box>
  );
};

export default Contactus;
