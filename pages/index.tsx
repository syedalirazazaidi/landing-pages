import type { NextPage } from "next";
import { Flex, Box, Heading, Text, Button, Icon } from "@chakra-ui/react";
import Header from "./header";
import Hero from "../Components/hero";
import Blog from "../Components/blog";

const Home: NextPage = () => {
  return (
    <Box paddingTop="8px" color="black" px="150px">
      <Header />
      <Hero />
      <Blog />
    </Box>
  );
};

export default Home;
