import React from "react";
import { Heading, Box, HStack, Button, Text, Flex } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Flex
      mx={["25px"]}
      justifyContent={["center", "center", "space-between"]}
      direction={["column", "row", "row"]}
      alignItems="center"
      px="150px"
      marginBottom="130px"
      marginLeft={["340px", 0, 0]}
    >
      <Box w={["800px", "600px", "600px"]} marginTop="220px" mx="25px">
        <Heading as="h2" size="2xl" fontWeight={[600, 500, 500]}>
          We make beautiful websites for all people.
        </Heading>
        <HStack spacing={12} marginRight={["20", "20", "20"]}>
          <Button my={12} colorScheme="teal">
            Start a project
          </Button>
          <Box>
            <Text> CALL US (+66) 010-020-0340</Text>
            <Text>For any inquiry</Text>
          </Box>
        </HStack>
      </Box>
      <Box marginTop={[40, 60]}>
        <iframe
          title="naruto"
          width="480px"
          height="300px"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </Box>
    </Flex>
  );
};

export default Hero;
