import { Flex, Icon, Stack, Text, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";
const SupportCard = () => {
  return (
    <Flex justify={"center"}>
      <Stack>
        <Icon as={IoMdMail} boxSize={"24px"} color="purple" />
        <Text TextStyle={"h1"} fontSize={"4xl"}>
          Contact Us
        </Text>
        <Text fontSize={"sm"} color={"gray"}>
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <card bg={"#e5e5e5"} p={4} borderRadius={"8px"} ml={4}>
        <Text
          fontSize={"sm"}
          color={"black"}
          fontWeight={600}
          m={3}
          justify={""}
        >
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack>
          <Button>Submit</Button>
        </HStack>
      </card>
    </Flex>
  );
};

export default SupportCard;
