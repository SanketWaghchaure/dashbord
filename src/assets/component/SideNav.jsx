import React from "react";
import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { LuArrowDownUp } from "react-icons/lu";
import { px } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
const SideNav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashbord",
      link: "/",
    },
    {
      icon: LuArrowDownUp,
      text: "Transaction",
      link: "/transaction",
    },
  ];

  return (
    <Stack
      justifyContent="space-between"
      boxShadow="xl"
      w="256px"
      h="100vh"
      display={{
        base: "none",
        lg: "flex",
      }}
      bg="white"
    >
      <Box>
        <Heading textAlign="center" as="h1" size="lg" p="6">
          @Sanket
        </Heading>

        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="12px"
                mx="3"
                py="3"
                px="4"
                _hover={{
                  bg: "#dad6d6",
                  color: "black",
                }}
                color="#5A5959"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="30px">
        <Link to="/support" key={"Support"}>
          <HStack
            borderRadius="12px"
            mx="3"
            py="3"
            px="4"
            _hover={{
              bg: "#dad6d6",
              color: "black",
            }}
            color="#5A5959"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
