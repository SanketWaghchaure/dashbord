import {
  HStack,
  Stack,
  Icon,
  Text,
  Image,
  Button,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { CustomeCard } from "../../../chakra/CustomeCard";
import { BsArrowUpRight } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
const PriceSection = () => {
  const timestamp = ["7:15pm", "7:30pm", "7:45pm", "8:00pm", "8:15pm"];
  return (
    <CustomeCard>
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
            <Text fontSize="14px">Current Price</Text>
            <Icon as={FaCircleInfo} />
          </HStack>
          <HStack>
            <Text fontSize="24px" fontWeight="bold">
              223.359555
            </Text>
            <HStack fontWeight="medium" color="green.500">
              <Icon as={BsArrowUpRight} />
              <Text fontSize="sm">22%</Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button backgroundColor="purple" borderRadius="xl">
            <Icon as={FaPlusCircle} />
            Buy
          </Button>
          <Button backgroundColor="purple" borderRadius="xl">
            <Icon as={FaMinusCircle} />
            Sell
          </Button>
        </HStack>
      </HStack>
      <HStack width={"100%"} mt="5">
        <Tabs.Root defaultValue="members" variant="plain">
          <HStack display={"flex"} justifyContent={"end"}>
            <Tabs.List bg="bg.muted" rounded="l3" p="1">
              <Tabs.Trigger value="members">1H</Tabs.Trigger>
              <Tabs.Trigger value="projects">1D</Tabs.Trigger>
              <Tabs.Trigger value="tasks">1M</Tabs.Trigger>
              <Tabs.Indicator rounded="l2" />
            </Tabs.List>
          </HStack>
          <Tabs.Content value="members" width="100%">
            <Image width="100%" src="Vector 27.svg" alt="Vector" />
            <HStack justify="space-between" mt="3">
              {timestamp.map((timestamp) => (
                <Text
                  key={timestamp}
                  fontSize="12px"
                  color="#5A5959"
                  fontWeight="bold"
                >
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </Tabs.Content>
          <Tabs.Content value="projects">
            <Image width="100%" src="Vector 27.svg" alt="Vector" />
            <HStack justify="space-between" mt="3">
              {timestamp.map((timestamp) => (
                <Text
                  key={timestamp}
                  fontSize="12px"
                  color="#5A5959"
                  fontWeight="bold"
                >
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </Tabs.Content>
          <Tabs.Content value="tasks">
            <Image width="100%" src="Vector 27.svg" alt="Vector" />
            <HStack justify="space-between" mt="3">
              {timestamp.map((timestamp) => (
                <Text
                  key={timestamp}
                  fontSize="12px"
                  color="#5A5959"
                  fontWeight="bold"
                >
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </Tabs.Content>
        </Tabs.Root>
      </HStack>
    </CustomeCard>
  );
};

export default PriceSection;
