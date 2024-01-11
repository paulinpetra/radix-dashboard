import Menu from "./components/menu";
import CardComponent from "./components/cards";
import { Overview } from "./components/overview";
import { Flex, Container, Box, Grid } from "@radix-ui/themes";
import SalesTable from "./components/sales";
import DownloadBtn from "./components/popover";
import TabBtns from "./components/tabs";

function App() {
  return (
    <Box
      style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}
    >
      <Container size="3">
        <Menu />
        <br />

        <h1>Dashboard</h1>
        <DownloadBtn />
        <br />
        <br />
        <TabBtns />

        <Flex gap="3">
          <CardComponent
            title="Total Revenue"
            amount="$45,231.89"
            info="+20.1% from last month"
          />
          <CardComponent
            title="Subscriptions"
            amount="+2350"
            info="+180.1% from last month"
          />
          <CardComponent
            title="Sales"
            amount="+12,234"
            info="+19% from last month"
          />
          <CardComponent
            title="Active Now"
            amount="+5739"
            info="+201 since last hour"
          />
        </Flex>
        <Grid columns="2" gap="8">
          <Overview />

          <SalesTable />
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
