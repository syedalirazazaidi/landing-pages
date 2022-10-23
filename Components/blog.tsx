import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { blogData } from "./data";
import {
  Heading,
  Box,
  VStack,
  AspectRatio,
  Image,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
const Blog = () => {
  return (
    <VStack marginLeft={["190px", "65px"]}>
      <Heading py="10px" marginRight={["-310px", "120px"]} alignItems="center">
        Our Blog
      </Heading>

      <Grid
        my={12}
        templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
        h="600px"
        rowGap="100px"
        columnGap={-8}
        templateRows="repeat(2, 2fr)"
      >
        {blogData.map((data) => (
          <GridItem
            colSpan={2}
            px="150px"
            marginLeft="-126px"
            borderRadius="40%"
          >
            <Box display="flex" width="510px" height="280px">
              <AspectRatio w="370px" h="340px" ratio={5 / 8}>
                <Image src="https://bit.ly/naruto-sage" alt="naruto" />
              </AspectRatio>
              <VStack
                align="flex-start"
                px="30px"
                textAlign="left"
                bg="gray.200"
                w="370px"
                h="340px"
              >
                <Text color="red.600" py="30px">
                  {data.datea}
                </Text>
                <Heading as="h4" size="md" py="10px" fontWeight="300">
                  How To Find Out Beautiful Workspace.
                </Heading>
                <Text color="gray.400">
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
        ))}
      </Grid>
    </VStack>
  );
};

export default Blog;
