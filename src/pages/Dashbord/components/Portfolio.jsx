import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { FaArrowsDownToLine } from "react-icons/fa6";
import { FaArrowsUpToLine } from "react-icons/fa6";
const Portfolio = () => {
  return (
    <div>
      <HStack
        justifyContent="space-between"
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack
          margin={{
            base: "0",
            xl: "5",
          }}
          align={{
            base: "flex-start",
            xl: "center",
          }}
        >
          <HStack>
            <Text fontSize="14px">Total Portfolio Value</Text>
            <Icon as={FaCircleInfo} />
          </HStack>
          <HStack>
            <Text fontSize="24px" fontWeight="bold">
              $ 112,312.00
            </Text>
          </HStack>
        </Stack>
        <Stack ml margin="5">
          <HStack>
            <Text fontSize="14px">Wallet Balances</Text>
          </HStack>
          <HStack>
            <HStack>
              <Text fontSize="24px" fontWeight="bold">
                223.359555
              </Text>

              <Tag.Root>
                <Tag.Label fontWeight="bold">BTC</Tag.Label>
              </Tag.Root>
            </HStack>
            <HStack margin="3">
              <Text fontSize="24px" fontWeight="bold">
                223.359555
              </Text>
              <Tag.Root>
                <Tag.Label fontWeight="bold">INR</Tag.Label>
              </Tag.Root>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button backgroundColor="purple" borderRadius="xl">
            <Icon as={FaArrowsUpToLine} />
            Deposit
          </Button>
          <Button backgroundColor="purple" borderRadius="xl">
            <Icon as={FaArrowsDownToLine} /> Withdrow
          </Button>
        </HStack>
      </HStack>
    </div>
  );
};

export default Portfolio;
