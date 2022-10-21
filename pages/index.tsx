import type { NextPage } from "next";
import { Flex, Box, Heading, Text, Button, Icon } from "@chakra-ui/react";
import Header from "./header";
import Hero from "../Components/hero";

const Home: NextPage = () => {
  return (
    <Box paddingTop="8px" color="black" px="120px">
      <Header />
      <Hero />
    </Box>
  );
};

export default Home;
