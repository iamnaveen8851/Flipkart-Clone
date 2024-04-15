import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Flex p={16} h={"60vh"} bg="RGBA(0, 0, 0, 0.92)" justifyContent="space-evenly" alignItems="center">
      <Box
        color="white"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        gap="20px"
      >
        <Box fontSize={"14px"}>
          ABOUT
          <br />
          <Box>
            <Text> Contact Us</Text>
            <Text> About Us</Text>
            <Text> Careers Us</Text>
            <Text> Flipkart Stories</Text>
          </Box>
        </Box>
        <Box fontSize={"14px"}>GROUP COMPANIES
        <Box>
            <Text>Myntra</Text>
            <Text>Flipkart Wholesale</Text>
            <Text> Cleartrip</Text>
            <Text>Shopsy</Text>
          </Box>
        </Box>
        <Box fontSize={"14px"}>HELP
        <Box>
            <Text>Payments</Text>
            <Text>Shipping</Text>
            <Text>Cancellations </Text>
            <Text>Returns</Text>
            <Text>FAQ</Text>
            <Text>Report Infringement</Text>
          </Box>
        </Box>
        <Box fontSize={"14px"}>CONSUMER POLICY
        <Box >
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
          <Box fontSize={"14px"}>
          MAIL US
          <br />
          <Box >
            <Text> Contact Us</Text>
            <Text> About Us</Text>
            <Text> Careers Us</Text>
            <Text> Flipkart Stories</Text>
          </Box>
        </Box>
       
      
        <Box fontSize={"14px"}>REGISTERED ADDRESS
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
