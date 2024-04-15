import { Flex, Box, Text, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex
        p={16}
        h={"60vh"}
        bg="RGBA(0, 0, 0, 0.92)"
        justifyContent="space-evenly"
        alignItems="center"
      >
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
          <Box fontSize={"14px"}>
            GROUP COMPANIES
            <Box>
              <Text>Myntra</Text>
              <Text>Flipkart Wholesale</Text>
              <Text> Cleartrip</Text>
              <Text>Shopsy</Text>
            </Box>
          </Box>
          <Box fontSize={"14px"}>
            HELP
            <Box>
              <Text>Payments</Text>
              <Text>Shipping</Text>
              <Text>Cancellations </Text>
              {/* <Text>Returns</Text> */}
              <Text>FAQ</Text>
              {/* <Text>Report Infringement</Text> */}
            </Box>
          </Box>
          <Box fontSize={"14px"}>
            CONSUMER POLICY
            <Box>
              <Text>Cancellations & Returns</Text>
              <Text>Terms of use</Text>
              <Text>Security</Text>
              <Text>Privacy</Text>
              {/* <Text>Sitemap</Text> */}
              {/* <Text>Grievance Redressal</Text>
              <Text>EPR Compliance</Text> */}
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
            <Box>
              <Text> Contact Us</Text>
              <Text> About Us</Text>
              <Text> Careers Us</Text>
              <Text> Flipkart Stories</Text>
            </Box>
          </Box>
          <Box fontSize={"14px"}>
            REGISTERED ADDRESS
            <Box>
              <Text>Flipkart Private Limited</Text>
              <Text>Building Alyssia Begonia</Text>
              <Text>Bengaluru 560103</Text>
              <Text>Karnatka, India</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
      <hr />
      <Flex
        p={5}
        bg="RGBA(0, 0, 0, 0.92)"
        color={"white"}
        justifyContent={"space-around"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Box>Become a Seller</Box>
          <Box>Advertise</Box>
          <Box>Gift Cards</Box>
          <Box>Help Center</Box>
          <Box>2007-2024 Flipkart.com</Box>
        </Box>
        <Box  display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"20px"}>
          <Image src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" />
        </Box>
      </Flex>
    </>
  );
};

export default Footer;
