import type { NextPage } from "next";
import { Flex, Box, Heading, Text, Button, Icon } from "@chakra-ui/react";
import Header from "./header";
import Hero from "../Components/hero";
import Blog from "../Components/blog";
import OurWorks from "../Components/ourWorks";
import Contactus from "../Components/contactus";
import Footer from "../Components/footer";

const Home: NextPage = () => {
  return (
    <Box
    // width="100%"
    // color="white"
    // bgGradient="linear(to-l, #7928CA, #FF0080)"
    >
      <Header />
      <Hero />
      <Blog />
      <OurWorks />
      <Contactus />
      <Box
        w={["100%", "100%", "100%"]}
        h="200px"
        py={16}
        marginLeft={["190px", "0px", "0px"]}
        marginBottom={["760px", "0px", "0px"]}

        // bgGradient={[
        //   "linear(to-tr, teal.300, yellow.400)",
        //   "linear(to-t, blue.200, teal.500)",
        //   "linear(to-b, orange.100, purple.300)",
        // ]}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
