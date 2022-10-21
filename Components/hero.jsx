import React from "react";
import {
  Heading,
  Box,
  HStack,
  VStack,
  Button,
  Text,
  Flex,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
const Hero = () => {
  return (
    <Flex>
      {/* <HStack w="600px" marginTop="250px" mx="25px"> */}
      <Box w="600px" marginTop="250px" mx="25px">
        <Heading as="h2" size="2xl" fontWeight={500}>
          We make beautiful websites for all people.
        </Heading>
        <HStack spacing={12} marginRight="20">
          <Button my={12} colorScheme="blackAlpha">
            Start a project
          </Button>
          <Box>
            <Text> CALL US (+66) 010-020-0340</Text>
            <Text>For any inquiry</Text>
          </Box>
        </HStack>
      </Box>
      {/* </HStack> */}
      <HStack w="600px" bg="grey">
        <AspectRatio maxW="400px" ratio={4 / 3}>
          <Image
            src="https://bit.ly/naruto-sage"
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio>
      </HStack>
    </Flex>
  );
};

export default Hero;
