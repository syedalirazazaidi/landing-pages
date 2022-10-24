import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import img1 from "../images/sp1.jpg";
import img2 from "../images/sp2.jpg";
import img3 from "../images/sp3.jpg";
import img4 from "../images/sp4.jpg";
const OurWorks = () => {
  return (
    <Box
      marginTop={["1380px", "180px", "180px"]}
      alignContent="center"
      textAlign="center"
      marginLeft={["72px", "130px", "350px"]}
      width="750px"
      alignItems="center"
    >
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
        gap={[16, 4, 1]}
        justifyContent={["center", "space-around"]}
        h="1260px"
        flexDirection={["column", "row", "row"]}
      >
        <Image
          boxSize={["900px", "400px", "300px"]}
          src={img1.src}
          alt="img1"
        />
        <Image
          boxSize={["900px", "400px", "300px"]}
          src={img2.src}
          alt="img2"
        />
        <Image
          boxSize={["900px", "400px", "300px"]}
          src={img3.src}
          alt="img3"
        />
        <Image
          boxSize={["900px", "400px", "300px"]}
          src={img4.src}
          alt="img4"
        />
      </Box>
    </Box>
  );
};

export default OurWorks;
