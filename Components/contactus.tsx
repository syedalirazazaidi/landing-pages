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
    <Box
      mx={["40px", "60px", "170px"]}
      w={["470px", "100%", "100%"]}
      marginTop={["530px", "-900px"]}
      marginLeft={["160px", "0px", "0px"]}
    >
      <Text
        py={16}
        fontSize={37}
        marginLeft={["90px", 0, 0]}
        textAlign="center"
        alignItems="center"
      >
        Contact us
      </Text>
      <Box
        display="flex"
        justifyContent="space-around"
        flexDirection={["column-reverse", "row", "row"]}
        marginBottom="50px"
      >
        <Box my={["60px", "0px", "0px"]} marginLeft={["-70px", "30px"]}>
          <FormControl>
            <HStack
              width={["790px", "700px"]}
              gap={8}
              marginBottom="20px"
              flexWrap={["wrap", "nowrap", "nowrap"]}
            >
              <Input type="text" placeholder="Full Name" />
              <Input type="email" placeholder="Your  Email" />
            </HStack>
            <HStack width={["790px", "700px"]} gap={8}>
              <Input type="number" placeholder="Your Number" />
              <Input type="text" placeholder="Budget" />
            </HStack>
            <Box py="10px">
              <Textarea
                placeholder="Here is a sample placeholder"
                size="sm"
                width={["790px", "700px"]}
              />
            </Box>
            <Button px={10} py={[4, 6, 6]} bg="red.200" color="whiteAlpha.800">
              Send Message
            </Button>
          </FormControl>
        </Box>

        <Box
          width={["650px", "480px", "480px"]}
          h={["320px", "230px", "230px"]}
          marginTop="-10px"
          as="iframe"
          src="https://www.google.com/maps/embed"
        />
      </Box>
    </Box>
  );
};

export default Contactus;
