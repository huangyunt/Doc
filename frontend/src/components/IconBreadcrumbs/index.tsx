import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import "./index.css";

export default function IconBreadcrumbs() {
  function handleClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div className="nav-wrapper">
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="rgb(170, 170, 170)"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            MUI
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="rgb(170, 170, 170)"
            href="/getting-started/installation/"
          >
            <WhatshotIcon
              sx={{ mr: 0.5 }}
              fontSize="inherit"
            />
            Core
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="rgb(170, 170, 170)"
          >
            <GrainIcon
              sx={{ mr: 0.5 }}
              fontSize="inherit"
            />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}