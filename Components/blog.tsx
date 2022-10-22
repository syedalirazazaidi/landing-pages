import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  Heading,
  Box,
  VStack,
  AspectRatio,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
const Blog = () => {
  return (
    <Box my="120px" marginLeft="30px">
      <Heading alignItems="center" textAlign="center">
        Our Blog
      </Heading>
      <Grid
        my={12}
        templateColumns="repeat(4, 1fr)"
        gap={8}
        h="700px"
        templateRows="repeat(2, 2fr)"
      >
        <GridItem colSpan={2}>
          <Box display="flex">
            <AspectRatio w="370px" h="340px" ratio={5 / 8}>
              <Image src="https://bit.ly/naruto-sage" alt="naruto" />
            </AspectRatio>
            <VStack align="flex-start" my="70px" px="30px" textAlign="left">
              <Text color='red.600'> December 22, 2017</Text>
              <Heading as="h4" size="md" py="10px">
                How To Find Out Beautiful Workspace.
              </Heading>
              <Text>
                Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.
              </Text>
              <Box marginLeft="70px" paddingTop="20px">
                <Button
                  colorScheme="teal"
                  variant="link"
                  marginLeft="59px"
                  bg="gray.300"
                  color="gray.600"
                  padding="10px"
                  borderRadius="5px"
                >
                  Read article
                </Button>
              </Box>
            </VStack>
          </Box>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="tomato" />
        <GridItem colSpan={2} bg="tomato" />
      </Grid>
    </Box>
  );
};

export default Blog;
