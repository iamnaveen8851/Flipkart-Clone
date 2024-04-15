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
import { color } from "framer-motion";

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

function FlipkartPlusIcon() {
  return (
    <svg
      fill="#000000"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="20px"
      height="20px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <g>
        <path
          d="M66,47.5H51.5V33.881c0-1.104-0.896-2-2-2s-2,0.896-2,2V47.5H34c-1.104,0-2,0.896-2,2s0.896,2,2,2h13.5v14.381
		c0,1.104,0.896,2,2,2s2-0.896,2-2V51.5H66c1.104,0,2-0.896,2-2S67.104,47.5,66,47.5z"
        />
        <path
          d="M50.236,16c-18.448,0-33.457,15.008-33.457,33.457c0,18.449,15.009,33.458,33.457,33.458
		c18.449,0,33.458-15.009,33.458-33.458C83.694,31.009,68.686,16,50.236,16z M50.236,78.915c-16.242,0-29.457-13.215-29.457-29.458
		C20.779,33.215,33.994,20,50.236,20c16.243,0,29.458,13.214,29.458,29.457C79.694,65.7,66.479,78.915,50.236,78.915z"
        />
      </g>
    </svg>
  );
}

function Orders() {
  return (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 100 100"
      xml:space="preserve"
    >
      <g>
        <g>
          <path
            d="M78.8,62.1l-3.6-1.7c-0.5-0.3-1.2-0.3-1.7,0L52,70.6c-1.2,0.6-2.7,0.6-3.9,0L26.5,60.4
			c-0.5-0.3-1.2-0.3-1.7,0l-3.6,1.7c-1.6,0.8-1.6,2.9,0,3.7L48,78.5c1.2,0.6,2.7,0.6,3.9,0l26.8-12.7C80.4,65,80.4,62.8,78.8,62.1z"
          />
        </g>
        <g>
          <path
            d="M78.8,48.1l-3.7-1.7c-0.5-0.3-1.2-0.3-1.7,0L52,56.6c-1.2,0.6-2.7,0.6-3.9,0L26.6,46.4
			c-0.5-0.3-1.2-0.3-1.7,0l-3.7,1.7c-1.6,0.8-1.6,2.9,0,3.7L48,64.6c1.2,0.6,2.7,0.6,3.9,0l26.8-12.7C80.4,51.1,80.4,48.9,78.8,48.1
			z"
          />
        </g>
        <g>
          <path
            d="M21.2,37.8l26.8,12.7c1.2,0.6,2.7,0.6,3.9,0l26.8-12.7c1.6-0.8,1.6-2.9,0-3.7L51.9,21.4
			c-1.2-0.6-2.7-0.6-3.9,0L21.2,34.2C19.6,34.9,19.6,37.1,21.2,37.8z"
          />
        </g>
      </g>
    </svg>
  );
}

function Wishlist() {
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
      <path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      fill="#000000"
      width="20px"
      height="20px"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.5927283,0 C46.8851522,0 48.6044701,0.569457711 49.7506821,1.70837313 C50.8365671,2.78734564 51.4080855,4.36429961 51.4652373,6.43923503 L51.47,6.78966855 L51.47,30.6411564 C51.47,32.8897803 50.896894,34.5798986 49.7506821,35.7115116 C48.6647971,36.7835659 47.0645455,37.347805 44.9499273,37.4042289 L44.5927283,37.4089309 L6.87727167,37.4089309 C4.58484778,37.4089309 2.86552986,36.8431245 1.71931792,35.7115116 C0.633432917,34.6394572 0.0619144957,33.0661404 0.00476265351,30.991561 L0,30.6411564 L0,6.78966855 C0,4.52646065 0.573105973,2.82904725 1.71931792,1.69742835 C2.80520292,0.62536834 4.4054545,0.0611262287 6.52007266,0.00470201759 L6.87727167,0 L44.5927283,0 Z M3.52623896,30.4440382 C3.52623896,31.5829506 3.81826434,32.4407854 4.4023151,33.0175427 C4.94146648,33.549934 5.69833296,33.8366062 6.67291454,33.8775594 L6.92109567,33.8826785 L24.3990187,33.882 L24.3990187,22.2745195 L24.245702,22.2745195 C23.8806665,23.3988418 23.3075605,24.4720437 22.5263841,25.494125 C21.7452076,26.5162363 20.8545234,27.4361364 19.8543317,28.2538254 C18.85411,29.0715144 17.8393102,29.739529 16.8099323,30.2578692 C15.7805245,30.7762214 14.8496796,31.1011035 14.0173976,31.2325157 C13.3895378,31.3201248 12.8967384,31.1814116 12.5389995,30.8163762 C12.1812605,30.4513377 12.0023911,30.0278882 12.0023911,29.5460276 C12.0023911,29.020379 12.1557078,28.5932931 12.4623411,28.2647702 C12.7306453,27.9773126 13.0939641,27.7932607 13.5522975,27.7126144 L13.7545433,27.6843827 C14.5138303,27.5967646 15.3242227,27.315684 16.1857208,26.8411409 C17.0471889,26.3665978 17.8831192,25.7825321 18.6935117,25.0889438 C19.5038743,24.3953853 20.2266487,23.6653144 20.8618349,22.898731 C21.4175967,22.2279705 21.8531822,21.5935445 22.1685914,20.9954529 L22.296409,20.7413526 L3.526,20.741 L3.52623896,30.4440382 Z M47.943,20.741 L29.1736807,20.7413526 C29.494937,21.4130214 29.9731433,22.1321475 30.6082997,22.898731 C31.243456,23.6653144 31.9662304,24.3953853 32.7766229,25.0889438 C33.5869854,25.7825321 34.4192675,26.3665978 35.273469,26.8411409 C36.0327327,27.262957 36.754511,27.5319138 37.438804,27.6480114 L37.6936568,27.6843827 C38.2631145,27.7427847 38.7011601,27.9362473 39.0077934,28.2647702 C39.3142773,28.5932931 39.4675192,29.020379 39.4675192,29.5460276 C39.4675192,30.0278882 39.2887245,30.4513377 38.9311351,30.8163762 C38.5733961,31.1814116 38.0805968,31.3201248 37.452737,31.2325157 C36.605832,31.1011035 35.6713388,30.7762214 34.6492575,30.2578692 C33.6271462,29.739529 32.6159947,29.0715144 31.6158029,28.2538254 C30.6155812,27.4361364 29.7248821,26.5162363 28.9437057,25.494125 C28.2493266,24.5856083 27.7193489,23.6367 27.3537725,22.6474002 L27.2243877,22.2745195 L27.049,22.2745195 L27.049,33.882 L44.5492183,33.8826785 C45.629642,33.8826785 46.4654526,33.5942999 47.0566504,33.0175427 C47.6026474,32.4851514 47.8966459,31.713262 47.9386456,30.7018746 L47.9438956,30.4440382 L47.943,20.741 Z M44.7942046,3.53142311 L44.5492183,3.52623896 L27.049,3.526 L27.049,11.0387118 C27.5310211,10.1042186 28.1187351,9.29748938 28.8123234,8.61852402 C29.5058818,7.93955866 30.268802,7.41755825 31.1010841,7.05252279 C31.9333661,6.68748732 32.8021607,6.50496959 33.7074678,6.50496959 C35.2844138,6.50496959 36.5948872,7.02697 37.638888,8.07097082 C38.6828888,9.11497164 39.2048893,10.4400531 39.2048893,12.0462151 C39.2048893,12.9660853 39.0077785,13.8239201 38.6135569,14.6197196 C38.2193055,15.4154891 37.6680891,16.1273037 36.9599077,16.7551635 C36.3402752,17.3045409 35.6339962,17.7756628 34.8410708,18.1685293 L34.4959408,18.3321096 L47.943,18.3321096 L47.9438956,6.98680923 C47.9438956,5.8478938 47.6481472,4.98641071 47.0566504,4.40235996 C46.5109294,3.86320858 45.7567808,3.5728963 44.7942046,3.53142311 Z M24.3990187,3.526 L6.92109567,3.52623896 C5.82598928,3.52623896 4.98639576,3.8182793 4.4023151,4.40235996 C3.86319132,4.94148373 3.57289391,5.71699955 3.53142285,6.72890742 L3.52623896,6.98680923 L3.526,18.3321096 L16.9522594,18.3321096 C16.0323891,17.908672 15.2183634,17.3830233 14.510182,16.7551635 C13.8020006,16.1273037 13.2471509,15.4154891 12.8456329,14.6197196 C12.4440849,13.8239201 12.2433109,12.9660853 12.2433109,12.0462151 C12.2433109,10.4400531 12.7689596,9.11497164 13.8202569,8.07097082 C14.8715543,7.02697 16.1783944,6.50496959 17.7407772,6.50496959 C18.6606475,6.50496959 19.5367236,6.68748732 20.3690056,7.05252279 C21.2012877,7.41755825 21.9642229,7.93955866 22.6578112,8.61852402 C23.2646748,9.21261871 23.7849034,9.90453264 24.218497,10.6942658 L24.3990187,11.0387118 L24.3990187,3.526 Z M17.9159835,9.61503763 C17.1275105,9.61503763 16.4996507,9.85232414 16.0324041,10.3268972 C15.5651575,10.8014403 15.3315342,11.4548528 15.3315342,12.2871349 C15.3315342,12.9733968 15.543253,13.6560104 15.9666905,14.3349757 C16.3901281,15.0139411 16.9741788,15.6272079 17.7188428,16.174776 C18.4635367,16.7223142 19.3177232,17.164008 20.2814025,17.4998574 C21.124648,17.7936994 22.0126076,17.9589856 22.9452814,17.9957158 L23.3477363,18.0035866 L24.0047822,18.0035866 L24.0047822,17.3903199 C24.0047822,16.3390225 23.8441689,15.3461273 23.5229425,14.4116341 C23.2017161,13.4771409 22.756374,12.6485071 22.1869163,11.9257327 C21.6174586,11.2029583 20.9676943,10.6371489 20.2376234,10.2283044 C19.5075525,9.81945988 18.7336725,9.61503763 17.9159835,9.61503763 Z M33.5322167,9.61503763 C32.7291506,9.61503763 31.9625821,9.81945988 31.2325112,10.2283044 C30.5024403,10.6371489 29.852676,11.2029583 29.2832182,11.9257327 C28.7137605,12.6485071 28.2647553,13.4771409 27.9362024,14.4116341 C27.6487448,15.2293156 27.4870499,16.0917112 27.4511177,16.998821 L27.443418,17.3903199 L27.443418,18.0035866 L28.1005087,18.0035866 C29.1956151,18.0035866 30.2250079,17.8356769 31.1886872,17.4998574 C32.1523964,17.164008 33.0029347,16.7223142 33.7403021,16.174776 C34.4776696,15.6272079 35.0580721,15.0139411 35.4815096,14.3349757 C35.9049771,13.6560104 36.1167108,12.9733968 36.1167108,12.2871349 C36.1167108,11.4548528 35.8867357,10.8014403 35.4267857,10.3268972 C34.9668356,9.85232414 34.3353126,9.61503763 33.5322167,9.61503763 Z"
        transform="translate(2 9)"
      />
    </svg>
  );
}

function Rewards() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="m7.7679 4.25h.0321 8.4.0321c.8128-.00001 1.4685-.00001 1.9994.04336.5466.04467 1.0267.13903 1.471.36537.7056.35952 1.2792.9332 1.6388 1.63881.2263.44421.3207.92436.3653 1.47099.0434.53091.0434 1.18652.0434 1.99935v.03212 4.4.0321c0 .8129 0 1.4685-.0434 1.9994-.0446.5466-.139 1.0267-.3653 1.471-.3596.7056-.9332 1.2792-1.6388 1.6388-.4443.2263-.9244.3207-1.471.3653-.5309.0434-1.1865.0434-1.9994.0434h-.0321-8.4-.03212c-.81283 0-1.46844 0-1.99935-.0434-.54663-.0446-1.02678-.139-1.47099-.3653-.70561-.3596-1.27929-.9332-1.63881-1.6388-.22634-.4443-.3207-.9244-.36537-1.471-.04337-.5309-.04337-1.1865-.04336-1.9994v-.0321-4.4-.0321-.00002c-.00001-.81283-.00001-1.46844.04336-1.99935.04467-.54663.13903-1.02678.36537-1.47099.35952-.70561.9332-1.27929 1.63881-1.63881.44421-.22634.92436-.3207 1.47099-.36537.53091-.04337 1.18653-.04337 1.99937-.04336zm-1.87722 1.53838c-.45387.03709-.71464.10622-.91216.20686-.42336.21571-.76757.55992-.98328.98328-.10064.19752-.16977.45828-.20686.91216-.02908.35597-.03613.78985-.03784 1.35932h16.49896c-.0017-.56947-.0088-1.00335-.0379-1.35932-.0371-.45388-.1062-.71464-.2068-.91216-.2158-.42336-.56-.76757-.9833-.98328-.1975-.10064-.4583-.16977-.9122-.20686-.4626-.0378-1.0568-.03838-1.9093-.03838h-8.4c-.85245 0-1.44669.00058-1.90932.03838zm-2.14068 8.41162v-3.45h16.5v3.45c0 .8525-.0006 1.4467-.0384 1.9093-.0371.4539-.1062.7147-.2068.9122-.2158.4233-.56.7675-.9833.9833-.1975.1006-.4583.1697-.9122.2068-.4626.0378-1.0568.0384-1.9093.0384h-8.4c-.85245 0-1.44669-.0006-1.90932-.0384-.45387-.0371-.71464-.1062-.91216-.2068-.42336-.2158-.76757-.56-.98328-.9833-.10064-.1975-.16977-.4583-.20686-.9122-.0378-.4626-.03838-1.0568-.03838-1.9093zm2.25.05c-.41421 0-.75.3358-.75.75s.33579.75.75.75h5c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z"
        fill="#000000"
        fill-rule="evenodd"
      />
    </svg>
  );
}

function Notification() {
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
        d="M9.33497 4.72727V5.25342C6.64516 6.35644 4.76592 9.97935 4.83412 13.1192L4.83409 14.8631C3.45713 16.6333 3.53815 19.2727 6.9735 19.2727H9.33497C9.33497 19.996 9.61684 20.6897 10.1186 21.2012C10.6203 21.7127 11.3008 22 12.0104 22C12.72 22 13.4005 21.7127 13.9022 21.2012C14.404 20.6897 14.6858 19.996 14.6858 19.2727H17.0538C20.4826 19.2727 20.5323 16.6278 19.1555 14.8576L19.1938 13.1216C19.2631 9.97811 17.3803 6.35194 14.6858 5.25049V4.72727C14.6858 4.00396 14.404 3.31026 13.9022 2.7988C13.4005 2.28734 12.72 2 12.0104 2C11.3008 2 10.6203 2.28734 10.1186 2.7988C9.61684 3.31026 9.33497 4.00395 9.33497 4.72727ZM12.9022 4.72727C12.9022 4.74573 12.9017 4.76414 12.9006 4.78246C12.6101 4.74603 12.3142 4.72727 12.014 4.72727C11.7113 4.72727 11.413 4.74634 11.1203 4.78335C11.1192 4.76474 11.1186 4.74603 11.1186 4.72727C11.1186 4.48617 11.2126 4.25494 11.3798 4.08445C11.547 3.91396 11.7739 3.81818 12.0104 3.81818C12.2469 3.81818 12.4738 3.91396 12.641 4.08445C12.8083 4.25494 12.9022 4.48617 12.9022 4.72727ZM11.1186 19.2727C11.1186 19.5138 11.2126 19.7451 11.3798 19.9156C11.547 20.086 11.7739 20.1818 12.0104 20.1818C12.2469 20.1818 12.4738 20.086 12.641 19.9156C12.8083 19.7451 12.9022 19.5138 12.9022 19.2727H11.1186ZM17.0538 17.4545C17.8157 17.4545 18.2267 16.5435 17.7309 15.9538C17.49 15.6673 17.3616 15.3028 17.3699 14.9286L17.4106 13.0808C17.4787 9.99416 15.0427 6.54545 12.014 6.54545C8.98598 6.54545 6.55028 9.99301 6.61731 13.0789L6.65748 14.9289C6.66561 15.303 6.53726 15.6674 6.29639 15.9538C5.80054 16.5435 6.21158 17.4545 6.9735 17.4545H17.0538Z"
        fill="#000000"
      />
    </svg>
  );
}

function CustomerCare() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
    >
      <title>headphone</title>
      <desc>Created with Sketch Beta.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        sketch:type="MSPage"
      >
        <g
          id="Icon-Set"
          sketch:type="MSLayerGroup"
          transform="translate(-464.000000, -515.000000)"
          fill="#000000"
        >
          <path
            d="M494,539 C494,540.104 493.104,541 492,541 L491.056,541 C491.649,539.338 492,537.481 492,535.5 C492,533.907 491.766,532.398 491.372,531 L492,531 C493.104,531 494,531.896 494,533 L494,539 L494,539 Z M488.873,541 L488,541 C486.896,541 486,540.104 486,539 L486,533 C486,531.896 486.896,531 488,531 L489.258,531 C489.723,532.386 490,533.897 490,535.5 C490,537.5 489.578,539.363 488.873,541 L488.873,541 Z M468.629,531 C468.234,532.398 468,533.907 468,535.5 C468,537.481 468.352,539.338 468.944,541 L468,541 C466.896,541 466,540.104 466,539 L466,533 C466,531.896 466.896,531 468,531 L468.629,531 L468.629,531 Z M470.742,531 L472,531 C473.104,531 474,531.896 474,533 L474,539 C474,540.104 473.104,541 472,541 L471.127,541 C470.422,539.363 470,537.5 470,535.5 C470,533.897 470.277,532.386 470.742,531 L470.742,531 Z M493.938,529.521 C493.966,529.183 494,528.846 494,528.5 C494,521.044 487.732,515 480,515 C472.268,515 466,521.044 466,528.5 C466,528.846 466.034,529.183 466.063,529.521 C464.838,530.205 464,531.498 464,533 L464,539 C464,541.209 465.791,543 468,543 C468,543 472.004,543.006 472,543 C474.125,542.905 476,541.148 476,539 L476,533 C476,530.791 474.209,529 472,529 L468,529 C468,522.337 473.373,517 480,517 C486.628,517 492,521.867 492,529 L488,529 C485.791,529 484,530.791 484,533 L484,539 C484,541.148 485.875,542.905 488,543 C487.996,543.006 490,543 490,543 L490,546 C490,546.553 490.447,547 491,547 C491.553,547 492,546.553 492,546 L492,543 C494.209,543 496,541.209 496,539 L496,533 C496,531.498 495.162,530.205 493.938,529.521 L493.938,529.521 Z"
            id="headphone"
            sketch:type="MSShapeGroup"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function Advertise() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>Analytics</title>
      <g
        id="Analytics"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-dasharray="0,0"
        stroke-linecap="round"
      >
        <path
          d="M4,18.9999905 L7.75407946,11.491832 C7.8680565,11.2638231 8.06482016,11.0879651 8.30413884,11.0001847 C9.11356935,10.7032911 9.60000359,10.8000012 9.76344156,11.2903152 L11.1190224,15.3570574 C11.1996482,15.5988744 11.3695623,15.8007859 11.5940587,15.9215227 C12.3533352,16.3298705 12.8485386,16.3029137 13.079669,15.8406525 L18,5.99999082 M13,6.46409237 L17.2774408,5.31795559 C17.4347269,5.27579637 17.5999292,5.27269863 17.7586883,5.30891799 C18.3183612,5.43660193 18.6397719,5.65560146 18.7229204,5.96591657 L19.9282036,10.4640923"
          id="Vector"
          stroke="#030819"
          stroke-width="2"
        ></path>
      </g>
    </svg>
  );
}

function Download(){
  return(
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="#1C274C"/>
<path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#1C274C"/>
</svg>
  )
}
const Navbar = () => {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [isthreeDotesOpen, setIsThreeDotsOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      top="0"
      // border={"1px solid black"}
      boxShadow="lg"
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
            _hover={{
              backgroundColor: "#1d62f5",
              color: "white",
              borderRadius: "10px",
            }}
            onMouseEnter={() => setIsThreeDotsOpen(true)}
            onMouseLeave={() => setIsThreeDotsOpen(false)}
          >
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Box _hover={{ color: "white" }} pt="3px">
                <LoginIcon />
              </Box>
              <Box
                _hover={{ color: "white" }}
                pl={"5px"}
                fontSize="17px"
                color="#2D3748"
              >
                Login
                {isthreeDotesOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </Box>
            </Box>
          </MenuButton>
          <MenuList>
            <MenuItem>
              {" "}
              <LoginIcon /> &nbsp; My Profile
            </MenuItem>

            <MenuItem>
              <FlipkartPlusIcon /> &nbsp; Flipkart Plus Zone
            </MenuItem>
            <MenuItem>
              <Orders /> &nbsp; Orders
            </MenuItem>
            <MenuItem>
              <Wishlist /> &nbsp; Wishlist (0)
            </MenuItem>
            <MenuItem>
              <GiftIcon /> &nbsp; Gift Cards
            </MenuItem>
            <MenuItem>
              <Rewards /> &nbsp; Rewards
            </MenuItem>
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
            <MenuItem>
              {" "}
              <Notification /> &nbsp; Notification Preferences
            </MenuItem>
            <MenuItem>
              <CustomerCare /> &nbsp; 24x7 Customer Care
            </MenuItem>

            <MenuItem>
              <Advertise /> &nbsp; Advertise
            </MenuItem>
            <MenuItem>
              <Download /> &nbsp; Download App
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
