import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import img1 from "../images/sp1.jpg";
import img2 from "../images/sp2.jpg";
import img3 from "../images/sp3.jpg";
import img4 from "../images/sp4.jpg";
const OurWorks = () => {
  return (
    <Box my="40px">
      <Text
        fontWeight="400"
        fontSize="30px"
        textAlign="center"
        marginTop="90px"
        marginBottom="30px"
      >
        Our Work
      </Text>
      <Box
        display="flex"
        gap={16}
        justifyContent="space-around"
        mx="100"
        h="200px"
      >
        <Image src={img1.src} alt="img1" />
        <Image src={img2.src} alt="img2" />
        <Image src={img3.src} alt="img3" />
        <Image src={img4.src} alt="img4" />
      </Box>
    </Box>
  );
};

export default OurWorks;
