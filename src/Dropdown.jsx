import { useState } from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
const Dropdown = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SimpleGrid boxShadow="lg" m="auto" p={5} w="97%" columns={9} spacing={10}>
      {/* Grocery */}
      <Box>
        <Box>
          <Image src="https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100" />
        </Box>
        <Box>
          <Text fontWeight="550" textAlign="center" fontSize="16px">
            Grocery
          </Text>
        </Box>
      </Box>
      <Box>
        {/* Mobiles */}
        <Box>
          <Image src="https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100" />
        </Box>
        <Box>
          <Text fontWeight="550" textAlign="center" fontSize="16px">
            Mobiles
          </Text>
        </Box>
      </Box>

      {/* Fashion */}

      <Box
        onMouseEnter={() => setIsProductOpen(true)}
        onMouseLeave={() => setIsProductOpen(false)}
      >
        <Menu isOpen={isProductOpen}>
          <MenuButton>
            <Box>
              <Image src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100" />
            </Box>
            <Box>
              <Text fontWeight="550" textAlign="center" fontSize="16px">
                Fashion{" "}
                {isProductOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Text>
            </Box>
          </MenuButton>
          <MenuList >
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* Electronics */}
      <Box>
        <Box>
          <Image src="https://rukminim2.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100" />
        </Box>
        <Box>
          <Text fontWeight="550" textAlign="center" fontSize="16px">
            Electronics <ChevronDownIcon />
          </Text>
        </Box>
      </Box>

      {/* Home & Furniture */}
      <Box>
        <Box>
          <Image src="https://rukminim2.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100" />
        </Box>
        <Box>
          <Text fontWeight="550" textAlign="center" fontSize="16px">
            Home & Furniture <ChevronDownIcon />
          </Text>
        </Box>
      </Box>

      {/* Appliances */}
      <Box>
        <Box>
          <Image src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100" />
        </Box>
        <Box>
          <Text fontWeight="550" textAlign="center" fontSize="16px">
            Appliances
          </Text>
        </Box>
      </Box>

      {/* Travel */}
      <Box>
        <Box>
          <Image src="https://rukminim2.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100" />
        </Box>
        <Box>
          <Text fontWeight="550" textAlign="center" fontSize="16px">
            Travel
          </Text>
        </Box>
      </Box>

      {/* Beauty, Toys & More */}
      <Box>
        <Box>
          <Image src="https://rukminim2.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100" />
        </Box>
        <Box>
          <Text fontWeight="550" textAlign="center" fontSize="16px">
            Beauty, Toys & More <ChevronDownIcon />
          </Text>
        </Box>
      </Box>

      {/* Two Wheelers  */}
      <Box>
        <Box>
          <Image src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100" />
        </Box>
        <Box>
          <Text fontWeight="550" textAlign="center" fontSize="16px">
            Two Wheelers <ChevronDownIcon />
          </Text>
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default Dropdown;
