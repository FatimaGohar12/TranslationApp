import React from "react";
import { Flex } from "@chakra-ui/react";
import "@fontsource/dm-sans";
import bg from "../Assets/bgimage.png";
import Cards from "./Cards";
const Translatorflex = () => {
  return (
    <>
      <Flex
        border="1px solid green"
        margin="auto"
        width={{ lg: "70%", base: "100%", md: "100%" }}
        height="900px"
        backgroundImage={`url(${bg})`}
        alignItems="center"
        justifyContent="space-around"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        flexDirection={{ lg: "row", md: "column", base: "column" }}
      >
        <Cards />
      </Flex>
    </>
  );
};

export default Translatorflex;
