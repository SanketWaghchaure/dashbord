import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import {
  Button,
  Icon,
  Box,
  Heading,
  HStack,
  Menu,
  Portal,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const TopNav = ({ title, onOpen }) => {
  const navLinks = [
    {
      text: "Support",
      link: "/support",
    },
  ];

  return (
    <Box px="4" bg="white">
      <HStack maxW="1280px" h="64px" justify="space-between" px="6" mx="auto">
        <Icon
          color="black"
          onClick="onOpen"
          display={{
            base: "block",
            lg: "none",
          }}
          as={GiHamburgerMenu}
        />

        <Heading fontSize="28px">{title}</Heading>

        <Menu.Root>
          <Menu.Trigger asChild>
            <Button bg="transparent" fontSize="24px">
              <Icon color="black" as={IoPersonCircleOutline} />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="new-txt-a">LogOut</Menu.Item>
                <Link to="/support" key={"Support"}>
                  <Menu.Item value="new-file-a">Support</Menu.Item>
                </Link>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </HStack>
    </Box>
  );
};

export default TopNav;
