import { Container } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import NavBar from "../../components/IconBreadcrumbs";
import "./index.css";
import Card from "./components/Card";
import useAsync from "react-use";
import { useState } from "react";
import { getDocItems } from "../../utils/api";
import FormDialog from "./components/Dialog";
interface Docs {
  id: string;
  title: string;
  createTime: string;
}
const WorkSpace: React.FC = () => {
  const [docItems, setDocItems] = useState<Array<Docs>>([]);
  // useAsync(async () => {
  //   const items = (await getDocItems()) as Docs[];
  //   setDocItems(items);
  // });
  return (
    <React.Fragment>
      <NavBar />
      <div className="workspace-wrapper">
        <Container sx={{ marginTop: "20px" }}>
          <FormDialog />
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
              {docItems.map((doc, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card
                    title={doc.title}
                    createTime={doc.createTime}
                  />
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
