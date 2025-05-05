import { Box, Button, Tabs, Flex, Icon, Tag } from "@chakra-ui/react";
import React from "react";
import DashbordLayout from "../../assets/component/DashbordLayout";
import { FaDownload } from "react-icons/fa6";
import TransactionTable from "./components/TransactionTable";
const Transaction = () => {
  const tabs = [
    {
      name: "all",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Tread",
      count: 50,
    },
  ];

  return (
    <DashbordLayout title="Transaction">
      <Flex justifyContent={"end"} mb="4">
        <Button bg={"PURPLE"} color="white" borderRadius="12px" px="6">
          <Icon as={FaDownload} /> Export csv
        </Button>
      </Flex>
      <Box>
        {" "}
        <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1">
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Trigger
                key={tab.name}
                value={tab.name}
                display={"flex"}
                alignItems="center"
                justifyContent="space-between"
                gap={"2"}
                borderRadius="8px"
                bg="white"
                color="black"
                _hover={{ bg: "gray.100" }}
                _selected={{ bg: "PURPLE", color: "white" }}
              >
                {tab.name} {tab.count}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Tabs.Content value={"all"}>
            <TransactionTable />
          </Tabs.Content>
          <Tabs.Content value={tabs.name}>Tab 2: Content</Tabs.Content>
          <Tabs.Content value={tabs.name}>Tab 3: Content</Tabs.Content>
        </Tabs.Root>
      </Box>
    </DashbordLayout>
  );
};

export default Transaction;
