import React, { Fragment } from "react";
import { CustomeCard } from "../../../chakra/CustomeCard";
import { Flex, Text, Stack, Box, Icon, Grid, Button } from "@chakra-ui/react";
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaBtc } from "react-icons/fa";
import { RxDividerHorizontal } from "react-icons/rx";
import { color } from "framer-motion";
const Transaction = () => {
  const transactions = [
    {
      id: "1",
      icon: PiCurrencyInrBold,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      date: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      date: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: PiCurrencyInrBold,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      date: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomeCard height={"full"}>
      <Text mb={"6"}>Recent Transactions</Text>
      <Stack>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i != 0 && <RxDividerHorizontal w="100%" />}
            <Flex gap={"4"}>
              <Grid
                placeItems={"center"}
                bgColor={"blackAlpha.50"}
                boxSize={"10"}
                borderRadius="full"
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify={"space-between"} w={"full"}>
                <Stack>
                  <Text fontSize={"sm"} color={"black"}>
                    {transaction.text}
                  </Text>
                  <Text fontSize={"sm"} color={"black"}>
                    {transaction.date}
                  </Text>
                </Stack>
                <Stack>
                  <Text fontSize={"sm"} color={"black"}>
                    {transaction.amount}
                  </Text>
                </Stack>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w={"full"} bgColor={"gray"} mt={"30px"}>
        View all
      </Button>
    </CustomeCard>
  );
};

export default Transaction;
