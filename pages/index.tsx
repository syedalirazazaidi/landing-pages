import type { NextPage } from "next";
import { Flex, Box, Heading, Text, Button, Icon } from "@chakra-ui/react";
import Header from "./header";
import Hero from "../Components/hero";
import Blog from "../Components/blog";
import OurWorks from "../Components/ourWorks";
import Contactus from "../Components/contactus";

const Home: NextPage = () => {
  return (
    <Box paddingTop="8px" color="black">
      <Header />
      <Hero />
      <Blog />
      <OurWorks />
      <Contactus />
    </Box>
  );
};

export default Home;
