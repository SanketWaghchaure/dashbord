import DashbordLayout from "../../assets/component/DashbordLayout";
import Portfolio from "./components/Portfolio";
import PriceSection from "../../pages/Dashbord/components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transaction from "./components/Transaction";
import InfoCard from "./components/InfoCard";


const Dashbord = () => {
  return (
    <DashbordLayout title="Dashbord">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem colSpan={2}>
          <Portfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="Visual.svg"
            text1="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="Visual.svg"
            text1="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>
      </Grid>
    </DashbordLayout>
  );
};

export default Dashbord;
