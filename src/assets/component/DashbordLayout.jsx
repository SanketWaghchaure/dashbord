import React from "react";
import { Flex, Box, Container, useDisclosure } from "@chakra-ui/react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import SideDrower from "./SideDrower";

const DashbordLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <div>
      <Flex bg="#e4e4e4">
        <SideNav />
        <SideDrower isOpen={isOpen} onClose={onClose} />
        <Box w="100%">
          <TopNav title={title} onOpen={onOpen} />
          <Container
            maxW="1230px"
            px="4"
            mt="6"
            bg="white"
            p="6"
            borderRadius="xl"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
};

export default DashbordLayout;
