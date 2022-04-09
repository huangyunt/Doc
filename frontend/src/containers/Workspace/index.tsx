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
  img: string;
}
const WorkSpace: React.FC = () => {
  const [docItems, setDocItems] =
    useState<Array<Docs>>(items);
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
                    imgUrl={doc.img}
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

const items = [
  {
    id: "1",
    title: "untitle",
    createTime: "11-22-33",
    img: "https://qci1u3.file.qingfuwucdn.com/file/ced200178fb62d0c_1649529139672.png",
  },
  {
    id: "1",
    title: "untitle",
    createTime: "11-22-33",
    img: "https://qci1u3.file.qingfuwucdn.com/file/7b61b4db87f678c9_1649529700610.png",
  },
  {
    id: "1",
    title: "untitle",
    createTime: "11-22-33",
    img: "https://qci1u3.file.qingfuwucdn.com/file/4ae44c2f32c5d171_1649528993134.png",
  },
  {
    id: "1",
    title: "untitle",
    createTime: "11-22-33",
    img: "https://qci1u3.file.qingfuwucdn.com/file/d689d6221c67d488_1649529599289.png",
  },
  {
    id: "1",
    title: "untitle",
    createTime: "11-22-33",
    img: "https://qci1u3.file.qingfuwucdn.com/file/7b61b4db87f678c9_1649529700610.png",
  },
];
items.forEach((val, index) => {
  items[index] = {
    ...val,
    id: index.toString(),
  };
});
