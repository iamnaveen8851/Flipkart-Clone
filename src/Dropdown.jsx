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
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
const Dropdown = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isElectronics, setIsElectronics] = useState(false);
  const [isFurniture, setIsFurniture] = useState(false);
  const [isBeauty, setIsBeauty] = useState(false);
  const [isTwoWheelers, setIsTwoWheelers] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenBottomWear, setMenBottomWear] = useState(false);
  const [isWomenWear, setWomenWear] = useState(false);
  const [isFootwear, setFootwear] = useState(false);
  const [isWomenFootWear, setWomenFootwear] = useState(false);
  const [isAudio, setIsAudio] = useState(false);
  const [isMensGroom, setIsMensGroom] = useState(false)

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
          <MenuList>
            <MenuItem
              onMouseEnter={() => setMenBottomWear(true)}
              onMouseLeave={() => setMenBottomWear(false)}
            >
              Men's Top Wear {isMenBottomWear ? <ChevronRightIcon /> : null}
              <Menu isOpen={isMenBottomWear}>
                <MenuList
                  position="absolute"
                  top="0"
                  left="220px"
                  //    right=""
                  ml="90%" // Adjust this value as needed
                  zIndex="999"
                  minWidth="200px"
                  boxShadow="md"
                  bg="white"
                  borderRadius="md"
                >
                  {/* Add your nested menu items here */}
                  <MenuItem>All</MenuItem>
                  <MenuItem>Men's T-Shirts</MenuItem>
                  <MenuItem>Men's Formal T-Shirts</MenuItem>
                  <MenuItem>Men's Kurtas</MenuItem>
                  <MenuItem>Men's Ethnic Sets</MenuItem>
                  <MenuItem>Men's Blazers</MenuItem>
                </MenuList>
              </Menu>
            </MenuItem>

            <MenuItem
              onMouseEnter={() => setWomenWear(true)}
              onMouseLeave={() => setWomenWear(false)}
            >
              Women's Ethnic {isWomenWear ? <ChevronRightIcon /> : null}
              <Menu isOpen={isWomenWear}>
                <MenuList
                  position="absolute"
                  top="0"
                  left="220px"
                  //    right=""
                  ml="90%" // Adjust this value as needed
                  zIndex="999"
                  minWidth="200px"
                  boxShadow="md"
                  bg="white"
                  borderRadius="md"
                >
                  {/* Add your nested menu items here */}
                  <MenuItem>Trousers</MenuItem>
                  <MenuItem>Jeans</MenuItem>
                  <MenuItem>Shorts</MenuItem>
                </MenuList>
              </Menu>
            </MenuItem>

            <MenuItem
              onMouseEnter={() => setFootwear(true)}
              onMouseLeave={() => setFootwear(false)}
            >
              Men Footwear
              {isFootwear ? <ChevronRightIcon /> : null}
              <Menu isOpen={isFootwear}>
                <MenuList
                  position="absolute"
                  top="0"
                  left="220px"
                  //    right=""
                  ml="90%" // Adjust this value as needed
                  zIndex="999"
                  minWidth="200px"
                  boxShadow="md"
                  bg="white"
                  borderRadius="md"
                >
                  {/* Add your nested menu items here */}
                  <MenuItem>Trousers</MenuItem>
                  <MenuItem>Jeans</MenuItem>
                  <MenuItem>Shorts</MenuItem>
                </MenuList>
              </Menu>
            </MenuItem>

            <MenuItem
              onMouseEnter={() => setWomenFootwear(true)}
              onMouseLeave={() => setWomenFootwear(false)}
            >
              Women Footwear
              {isWomenFootWear ? <ChevronRightIcon /> : null}
              <Menu isOpen={isWomenFootWear}>
                <MenuList
                  position="absolute"
                  top="0"
                  left="220px"
                  //    right=""
                  ml="90%" // Adjust this value as needed
                  zIndex="999"
                  minWidth="200px"
                  boxShadow="md"
                  bg="white"
                  borderRadius="md"
                >
                  {/* Add your nested menu items here */}
                  <MenuItem>All</MenuItem>
                  <MenuItem>Heels</MenuItem>
                  <MenuItem>Sneaks</MenuItem>
                  <MenuItem>Long Boot</MenuItem>
                </MenuList>
              </Menu>
            </MenuItem>
            <MenuItem>Watches and Accessories</MenuItem>
            <MenuItem>Women Western</MenuItem>
            <MenuItem>Bags, Suitcases & Luggage</MenuItem>
            <MenuItem>Kids</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* Electronics */}
      <Box
        onMouseEnter={() => setIsElectronics(true)}
        onMouseLeave={() => setIsElectronics(false)}
      >
        <Menu isOpen={isElectronics}>
          <MenuButton>
            <Box>
              <Image src="https://rukminim2.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100" />
            </Box>
            <Box>
              <Text fontWeight="550" textAlign="center" fontSize="16px">
                Electronics{" "}
                {isElectronics ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Text>
            </Box>
          </MenuButton>

          <MenuList>
            <MenuItem
             onMouseEnter={() => setIsElectronics(true)}
             onMouseLeave={() => setIsElectronics(false)}
            >
              Audio {isElectronics ? <ChevronRightIcon /> : null}
              <Menu isOpen={isElectronics}>
                <MenuList
                  position="absolute"
                  top="0"
                  left="220px"
                  //    right=""
                  ml="90%" // Adjust this value as needed
                  zIndex="999"
                  minWidth="200px"
                  boxShadow="md"
                  bg="white"
                  borderRadius="md"
                >
                  {/* Add your nested menu items here */}
                  <MenuItem>All</MenuItem>
                  <MenuItem>Heels</MenuItem>
                  <MenuItem>Sneaks</MenuItem>
                  <MenuItem>Long Boot</MenuItem>
                </MenuList>
              </Menu>
            </MenuItem>

            <MenuItem>Electronics Gst Store</MenuItem>
            <MenuItem>Cameras & Accessories</MenuItem>
            <MenuItem>Computers peripherals</MenuItem>
            <MenuItem>Gaming</MenuItem>
            <MenuItem>Health & Personal Care</MenuItem>
            <MenuItem>Laptop Accessories</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* Home & Furniture */}
      <Box
        onMouseEnter={() => setIsFurniture(true)}
        onMouseLeave={() => setIsFurniture(false)}
      >
        <Menu isOpen={isFurniture}>
          <MenuButton>
            <Box>
              <Image src="https://rukminim2.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100" />
            </Box>
            <Box>
              <Text fontWeight="550" textAlign="center" fontSize="16px">
                Home & Furniture
                {isFurniture ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem  
             onMouseEnter={() => setIsFurniture(true)}
             onMouseLeave={() => setIsFurniture(false)}
            >Home Furnishings
            {isFurniture ? <ChevronRightIcon /> : null}
              <Menu isOpen={isFurniture}>
                <MenuList
                  position="absolute"
                  top="0"
                  left="220px"
                  //    right=""
                  ml="90%" // Adjust this value as needed
                  zIndex="999"
                  minWidth="200px"
                  boxShadow="md"
                  bg="white"
                  borderRadius="md"
                >
                  {/* Add your nested menu items here */}
                  <MenuItem>All</MenuItem>
                  <MenuItem>Heels</MenuItem>
                  <MenuItem>Sneaks</MenuItem>
                  <MenuItem>Long Boot</MenuItem>
                </MenuList>
              </Menu>
            </MenuItem>



            <MenuItem>Furniture Studio</MenuItem>
            <MenuItem>Living Room Furniture</MenuItem>
            <MenuItem>Kitchen & Dining</MenuItem>
            <MenuItem>Bedroom Furniture</MenuItem>
            <MenuItem>Space Saving Furniture</MenuItem>
            <MenuItem>Home Decor</MenuItem>
            <MenuItem>Tools & Utility</MenuItem>
          </MenuList>
        </Menu>
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
      <Box 
      
        onMouseEnter={() => setIsBeauty(true)}
        onMouseLeave={() => setIsBeauty(false)}
      >
        <Menu isOpen={isBeauty}>
          <MenuButton >
            <Box>
              <Image src="https://rukminim2.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100" />
            </Box>
            <Box>
              <Text fontWeight="550" textAlign="center" fontSize="16px">
                Beauty, Toys & More
                {isBeauty ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Text>
            </Box>
          </MenuButton>
          <MenuList >
            <MenuItem
             onMouseEnter={() => setIsMensGroom(true)}
             onMouseLeave={() => setIsMensGroom(false)}
            >Men's Grooming  {isMensGroom ? <ChevronRightIcon /> : null}
              <Menu isOpen={isMensGroom}>
                <MenuList
                  position="absolute"
                  top="0"
                  left="100px"
                  //    right=""
                //   ml="90%" // Adjust this value as needed
                  zIndex="999"
                  minWidth="200px"
                  boxShadow="md"
                  bg="white"
                  borderRadius="md"
                >
                  {/* Add your nested menu items here */}
                  <MenuItem>All</MenuItem>
                  <MenuItem>Heels</MenuItem>
                  <MenuItem>Sneaks</MenuItem>
                  <MenuItem>Long Boot</MenuItem>
                </MenuList>
              </Menu> </MenuItem>



            <MenuItem>Food & Drinks</MenuItem>
            <MenuItem>Nutrition & Health Care</MenuItem>
            <MenuItem>Baby Care</MenuItem>
            <MenuItem>Toys & School Supplies</MenuItem>
            <MenuItem>Sports & Fitness </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* Two Wheelers  */}
      <Box
        onMouseEnter={() => setIsTwoWheelers(true)}
        onMouseLeave={() => setIsTwoWheelers(false)}
      >
        <Menu isOpen={isTwoWheelers}>
          <MenuButton>
            <Box>
              <Image src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100" />
            </Box>
            <Box>
              <Text fontWeight="550" textAlign="center" fontSize="16px">
                Two Wheelers
                {isTwoWheelers ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Text>
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem>Petrol Vehicles</MenuItem>
            <MenuItem>Electric Vehicles</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </SimpleGrid>
  );
};

export default Dropdown;
