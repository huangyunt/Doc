import { Container } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import NavBar from "../../components/IconBreadcrumbs";
import { AddFile } from "./components/AddFile";
import "./index.css";
import Card from "./components/Card";

const WorkSpace: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="workspace-wrapper">
        <Container sx={{ marginTop: "20px" }}>
          <AddFile />
          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card />
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default WorkSpace;
