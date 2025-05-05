import React from "react";
import { Table, Box } from "@chakra-ui/react";
const TransactionTable = () => {
  const items = [
    {
      id: "HD82NA2H",
      date: "2022-06-09",
      type: "INR Deposit",
      amount: "+ ₹81,123.10",
      stetus: "pending",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-07",
      type: "INR Withdraw",
      amount: "- ₹81,123.10",
      stetus: "completed",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-08",
      type: "Buy",
      amount: "+ 12.48513391 BTC",
      stetus: "processing",
    },
    {
      id: "HD82NA2H",
      date: "2022-07-07",
      type: "Sell",
      amount: "- 0.36401628 BTC",
      stetus: "canceld",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-07",
      type: "BTC Deposit",
      amount: "+ 4.13946104 BTC",
      stetus: "pending",
    },
    {
      id: "HD82NA2H",
      date: "2022-06-07",
      type: "BTC Withdraw",
      amount: "- 10.00000000 BTC",
      stetus: "pending",
    },
  ];
  const StetusColor = {
    pending: "#797E82",
    completed: "#4BB543",
    processing: "#FFA500",
    canceld: "#FF0000",
  };
  return (
    <div>
      {" "}
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row fontSize={"sm"} fontWeight="bold" color={"gray.500"}>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Date</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Amount</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Stetus</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.date}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
              <Table.Cell textAlign="end">{item.amount}</Table.Cell>
              <Table.Cell
                textAlign="end"
                display={"flex"}
                justifyContent={"end"}
              >
                <Box
                  bg={StetusColor[item.stetus]}
                  maxWidth={"200px"}
                  borderRadius={"10px"}
                >
                  {item.stetus}
                </Box>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default TransactionTable;
