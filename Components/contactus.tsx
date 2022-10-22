import React from "react";

import {
  FormControl,
  Container,
  Textarea,
  Box,
  HStack,
  Input,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
const Contactus = () => {
  return (
    <Container>
      <Text py={8} fontSize={32}  textAlign='center' alignItems='center'>Contact us</Text>
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
          </FormControl>
        </Box>

        {/* <AspectRatio ratio={4 / 3}> */}
        <Box width='480px' marginTop='-10px' h='230px' as="iframe" src="https://www.google.com/maps/embed" />
        {/* </AspectRatio> */}
      </Box>
    </Container>
  );
};

export default Contactus;
