import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Flex p={10} bg="RGBA(0, 0, 0, 0.92)" justifyContent="space-evenly" alignItems="center">
      <Box
        color="white"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        gap="20px"
      >
        <Box>
          ABOUT
          <br />
          <Box>
            <Text> Contact Us</Text>
            <Text> About Us</Text>
            <Text> Careers Us</Text>
            <Text> Flipkart Stories</Text>
          </Box>
        </Box>
        <Box>GROUP COMPANIES
        <Box>
            <Text> Contact Us</Text>
            <Text> About Us</Text>
            <Text> Careers Us</Text>
            <Text> Flipkart Stories</Text>
          </Box>
        </Box>
        <Box>HELP
        <Box>
            <Text> Contact Us</Text>
            <Text> About Us</Text>
            <Text> Careers Us</Text>
            <Text> Flipkart Stories</Text>
          </Box>
        </Box>
        <Box>CONSUMER POLICY
        <Box>
            <Text> Contact Us</Text>
            <Text> About Us</Text>
            <Text> Careers Us</Text>
            <Text> Flipkart Stories</Text>
          </Box>
        </Box>
      </Box>
      

      <Box
      borderLeft={"1px solid white"}
        color="white"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        gap="20px"
      >
        &nbsp;
          <Box>
          MAIL US
          <br />
          <Box>
            <Text> Contact Us</Text>
            <Text> About Us</Text>
            <Text> Careers Us</Text>
            <Text> Flipkart Stories</Text>
          </Box>
        </Box>
        <Box>GROUP COMPANIES
        <Box>
            <Text> Contact Us</Text>
            <Text> About Us</Text>
            <Text> Careers Us</Text>
            <Text> Flipkart Stories</Text>
          </Box>
        </Box>
        <Box>HELP
        <Box>
            <Text> Contact Us</Text>
            <Text> About Us</Text>
            <Text> Careers Us</Text>
            <Text> Flipkart Stories</Text>
          </Box>
        </Box>
        <Box>REGISTERED ADDRESS
        <Box>
            <Text>Flipkart Private Limited</Text>
            <Text>Building Alyssia Begonia</Text>
            <Text>Bengaluru 560103</Text>
            <Text>Karnatka, India</Text>
          </Box>
        </Box>
      


        
      </Box>
    </Flex>
  );
};

export default Footer;
