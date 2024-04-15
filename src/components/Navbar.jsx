import {
  Flex,
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import {
  SearchIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { useState } from "react";

function LoginIcon() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.1303 13C13.8203 13 15.1903 11.63 15.1903 9.94C15.1903 8.25001 13.8203 6.88 12.1303 6.88C10.4403 6.88 9.07031 8.25001 9.07031 9.94C9.07031 11.63 10.4403 13 12.1303 13Z"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.5 19.11C6.80719 17.8839 7.51529 16.7956 8.51178 16.0179C9.50827 15.2403 10.736 14.818 12 14.818C13.264 14.818 14.4917 15.2403 15.4882 16.0179C16.4847 16.7956 17.1928 17.8839 17.5 19.11"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.24896 2.29245C1.8582 2.15506 1.43005 2.36047 1.29266 2.75123C1.15527 3.142 1.36068 3.57015 1.75145 3.70754L2.01266 3.79937C2.68026 4.03409 3.11902 4.18964 3.44186 4.34805C3.74509 4.49683 3.87876 4.61726 3.96682 4.74612C4.05708 4.87821 4.12678 5.05963 4.16611 5.42298C4.20726 5.80319 4.20828 6.2984 4.20828 7.03835V9.75999C4.20828 11.2125 4.22191 12.2599 4.35897 13.0601C4.50529 13.9144 4.79742 14.526 5.34366 15.1022C5.93752 15.7285 6.69032 16.0012 7.58656 16.1283C8.44479 16.25 9.53464 16.25 10.8804 16.25L16.2861 16.25C17.0278 16.25 17.6518 16.25 18.1568 16.1882C18.6925 16.1227 19.1811 15.9793 19.6076 15.6318C20.0341 15.2842 20.2731 14.8346 20.4455 14.3232C20.6079 13.841 20.7339 13.2299 20.8836 12.5035L21.3925 10.0341L21.3935 10.0295L21.4039 9.97726C21.5686 9.15237 21.7071 8.45848 21.7416 7.90037C21.7777 7.31417 21.711 6.73616 21.3292 6.23977C21.0942 5.93435 20.7639 5.76144 20.4634 5.65586C20.1569 5.54817 19.8103 5.48587 19.4606 5.44677C18.7735 5.36997 17.9389 5.36998 17.1203 5.36999L5.66809 5.36999C5.6648 5.33324 5.66124 5.29709 5.6574 5.26156C5.60367 4.76518 5.48725 4.31246 5.20527 3.89982C4.92109 3.48396 4.54324 3.21762 4.10261 3.00142C3.69052 2.79922 3.16689 2.61514 2.55036 2.39841L2.24896 2.29245ZM5.70828 6.86999H17.089C17.9454 6.86999 18.6991 6.87099 19.2939 6.93748C19.5895 6.97052 19.8107 7.01642 19.9661 7.07104C20.0931 7.11568 20.1361 7.15213 20.1423 7.1574C20.1422 7.15729 20.1426 7.15762 20.1423 7.1574C20.2037 7.23881 20.2704 7.38651 20.2444 7.80796C20.217 8.25153 20.1005 8.84379 19.9229 9.73372L19.9225 9.73594L19.4237 12.1561C19.2623 12.9389 19.1537 13.4593 19.024 13.8441C18.9009 14.2095 18.7853 14.3669 18.66 14.469C18.5348 14.571 18.3573 14.6525 17.9746 14.6993C17.5714 14.7487 17.0399 14.75 16.2406 14.75H10.9377C9.5209 14.75 8.53783 14.7482 7.79716 14.6432C7.08235 14.5418 6.70473 14.3576 6.43219 14.0701C6.11202 13.7325 5.93933 13.4018 5.83744 12.8069C5.72628 12.1578 5.70828 11.249 5.70828 9.75999L5.70828 6.86999Z"
        fill="#1C274C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5002 21.75C6.25756 21.75 5.2502 20.7426 5.2502 19.5C5.2502 18.2573 6.25756 17.25 7.5002 17.25C8.74285 17.25 9.7502 18.2573 9.7502 19.5C9.7502 20.7426 8.74285 21.75 7.5002 21.75ZM6.7502 19.5C6.7502 19.9142 7.08599 20.25 7.5002 20.25C7.91442 20.25 8.2502 19.9142 8.2502 19.5C8.2502 19.0858 7.91442 18.75 7.5002 18.75C7.08599 18.75 6.7502 19.0858 6.7502 19.5Z"
        fill="#1C274C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5002 21.7501C15.2576 21.7501 14.2502 20.7427 14.2502 19.5001C14.2502 18.2574 15.2576 17.2501 16.5002 17.2501C17.7428 17.2501 18.7502 18.2574 18.7502 19.5001C18.7502 20.7427 17.7428 21.7501 16.5002 21.7501ZM15.7502 19.5001C15.7502 19.9143 16.086 20.2501 16.5002 20.2501C16.9144 20.2501 17.2502 19.9143 17.2502 19.5001C17.2502 19.0859 16.9144 18.7501 16.5002 18.7501C16.086 18.7501 15.7502 19.0859 15.7502 19.5001Z"
        fill="#1C274C"
      />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      stroke-width="3"
      stroke="#000000"
      fill="none"
    >
      <path d="M52,27.18V52.76a2.92,2.92,0,0,1-3,2.84H15a2.92,2.92,0,0,1-3-2.84V27.17" />
      <polyline points="26.26 55.52 26.26 38.45 37.84 38.45 37.84 55.52" />
      <path d="M8.44,19.18s-1.1,7.76,6.45,8.94a7.17,7.17,0,0,0,6.1-2A7.43,7.43,0,0,0,32,26a7.4,7.4,0,0,0,5,2.49,11.82,11.82,0,0,0,5.9-2.15,6.66,6.66,0,0,0,4.67,2.15,8,8,0,0,0,7.93-9.3L50.78,9.05a1,1,0,0,0-.94-.65H14a1,1,0,0,0-.94.66Z" />
      <line x1="8.44" y1="19.18" x2="55.54" y2="19.18" />
      <line x1="21.04" y1="19.18" x2="21.04" y2="8.4" />
      <line x1="32.05" y1="19.18" x2="32.05" y2="8.4" />
      <line x1="43.01" y1="19.18" x2="43.01" y2="8.4" />
    </svg>
  );
}

// 3 dots icon
function ThreeDotsIcon() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="6" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

const Navbar = () => {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [isthreeDotesOpen, setIsThreeDotsOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      border={"1px solid black"}
      p={3}
      minWidth="max-content"
      alignItems="center"
      justifyContent={"space-around"}
      gap="2"
    >
      {/* Logo */}
      <Box p="2">
        <Image src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />
      </Box>
      {/* Search */}
      <Box>
        <InputGroup borderRadius="5px" w="500px" bg="#EDF2F7">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="#718096" />
          </InputLeftElement>
          <Input
            color="#718096"
            type="tel"
            placeholder="Search for Products, Brands and More"
          />
        </InputGroup>
      </Box>

      {/* Login */}
      <Box>
        <Menu isOpen={isthreeDotesOpen}>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            border="none"
            borderWidth="1px"
            onMouseEnter={() => setIsThreeDotsOpen(true)}
            onMouseLeave={() => setIsThreeDotsOpen(false)}
            // onClick={() => setIsLoginMenuOpen(!isLoginMenuOpen)}
            // pointerEvents={isLoginMenuOpen ? "auto" : "none"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box pt="3px">
                <LoginIcon />
              </Box>
              <Box pl={"5px"} fontSize="17px" color="#2D3748">
                Login
                {isthreeDotesOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Box>
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem> <LoginIcon/> &nbsp; My Profile</MenuItem>

            <MenuItem>Flipkart Plus Zone</MenuItem>
            <MenuItem>Orders</MenuItem>
            <MenuItem>Wishlist (0)</MenuItem>
            <MenuItem>Gift Cards</MenuItem>
            <MenuItem>Rewards</MenuItem>
            <MenuItem>Notifications</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      {/* Cart */}
      <Box>
        <Menu>
          <MenuButton px={4} py={2} transition="all 0.2s" border="none">
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box p={2}>
                <CartIcon />
              </Box>
              <Link fontSize="17px" color="#2D3748">
                Cart
              </Link>
            </Box>
          </MenuButton>
        </Menu>
      </Box>

      {/* Become a Seller */}
      <Box>
        <Menu>
          <MenuButton px={4} py={2} transition="all 0.2s" border="none">
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box p={2}>
                <StoreIcon />
              </Box>
              <Link fontSize="17px" color="#2D3748">
                Become a Seller
              </Link>
            </Box>
          </MenuButton>
        </Menu>
      </Box>

      {/* 3 dots menu */}
      <Box>
        <Menu isOpen={isLoginMenuOpen}>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            border="none"
            borderWidth="1px"
            onMouseEnter={() => setIsLoginMenuOpen(true)}
            onMouseLeave={() => setIsLoginMenuOpen(false)}
          >
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box color="#2D3748">
                <ThreeDotsIcon />
              </Box>
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem>Notification Preferences</MenuItem>
            <MenuItem>24x7 Customer Care</MenuItem>

            <MenuItem>Advertise</MenuItem>
            <MenuItem>Download App</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
