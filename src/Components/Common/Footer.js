import React from "react";
import { Box, Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      height="40vh"
      bg="#0E4E9B"
      mt={{ base: "40px", md: "300px" }}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        w="80%"
        height="80%"
        borderBottom="2px solid whitesmoke"
        display="flex"
      >
        <Flex
          flexDirection="column"
          h="100%"
          justifyContent="center"
          gap="10px"
        >
          <Box fontSize="4xl" color="#8cb8ed" fontWeight="600">
            {" "}
            Get In Touch
          </Box>
          <Flex gap={10} alignItems="center">
            <Box bg="white" height="30px" width="30px" borderRadius="5px" />
            <a href="tel:+91 9494270280">
              <Box fontSize="2xl" color="white" fontWeight="600">
                {" "}
                +91 9494270280
              </Box>
            </a>
          </Flex>
          <Flex gap={10} alignItems="center">
            <Box bg="white" height="30px" width="30px" borderRadius="5px" />
            <a href={`mailto:info@auditlens.com?subject=Auditlens query email`}>
              <Box fontSize="2xl" color="white" fontWeight="600">
                {" "}
                info@auditlens.com
              </Box>
            </a>
          </Flex>
        </Flex>
      </Box>
      <Box
        h="20%"
        display="flex"
        color="#8cb8ed"
        width="80%"
        fontSize={{ base: "sm", md: "md" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex>© 2022 Auditlens. All Rights Resevered.</Flex>
        <Flex gap="10px">
          <p>Privacy Policy</p>
          <p>Cookies Policies</p>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
