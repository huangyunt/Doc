import { Container } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavBar from "../../components/IconBreadcrumbs";

const WorkSpace: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          ></Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default WorkSpace;
