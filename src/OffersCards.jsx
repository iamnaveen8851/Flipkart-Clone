import React from "react";
import { SimpleGrid, Box, Image } from "@chakra-ui/react";
const OffersCards = () => {
  return (
    <SimpleGrid  boxShadow='lg' p={1} w="97%" m="auto" columns={3} spacing={10}>
      <Box>
        <Image src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4d24acf7af61c8cb.jpg?q=20"/>
      </Box>
      <Box >
        <Image src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/38b9889b3507a4dc.jpg?q=20" />
      </Box>
      <Box >
        <Image src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/16fcdf9eafcb5e5d.jpg?q=20" />
      </Box>
      <Box >
        <Image src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/1d9e687e243fa9cc.jpg?q=20" />
      </Box>
      <Box >
        <Image  src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/275ddfbcac77620d.jpg?q=20" />
      </Box>
      <Box >
        <Image src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/82dbeaf3672cc748.jpg?q=20" />
      </Box>
    </SimpleGrid>
  );
};

export default OffersCards;
