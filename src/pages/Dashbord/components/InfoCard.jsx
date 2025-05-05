import React from "react";
import { CustomeCard } from "../../../chakra/CustomeCard";
import { Text } from "@chakra-ui/react";
const InfoCard = ({ imgUrl, text1, inverted }) => {
  return (
    <CustomeCard
      bgImage={imgUrl}
      bgSize={"cover"}
      bgPosition={"center"}
      bg={inverted ? "purple" : "white"}
    >
      <Text colorScheme="gray">Loan</Text>
      <Text fontSize="20px" fontWeight="medium" mt={2}>
        {text1}
      </Text>
    </CustomeCard>
  );
};

export default InfoCard;
