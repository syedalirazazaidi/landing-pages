import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import img1 from "../images/sp1.jpg";
import img2 from "../images/sp2.jpg";
import img3 from "../images/sp3.jpg";
import img4 from "../images/sp4.jpg";
const OurWorks = () => {
  return (
    <Box py={["1400px", "100px", "100px"]}>
      <Text
        py={["10px"]}
        fontWeight="400"
        fontSize="30px"
        textAlign="center"
        marginTop="90px"
        marginBottom="30px"
        zIndex={-1}
        bg="red"
      >
        Our Work
      </Text>
      <Box
        display="flex"
        gap={16}
        justifyContent="space-around"
        h="200px"
        flexDirection={["column", "row", "row"]}
        marginLeft={["40px"]}
      >
        <Image
          boxSize={["400px", "400px", "300px"]}
          src={img1.src}
          alt="img1"
        />
        <Image
          boxSize={["400px", "400px", "300px"]}
          src={img2.src}
          alt="img2"
        />
        <Image
          boxSize={["400px", "400px", "300px"]}
          src={img3.src}
          alt="img3"
        />
        <Image
          boxSize={["400px", "400px", "300px"]}
          src={img4.src}
          alt="img4"
        />
      </Box>
    </Box>
  );
};

export default OurWorks;
