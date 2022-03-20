import React from "react";
import DocToolBar from "re-editor";
import IconBreadcrumbs from "./components/IconBreadcrumbs";
import "re-editor/lib/styles/index.css";
export default function Doc() {
  return (
    <React.Fragment>
      <IconBreadcrumbs />
      <DocToolBar />
    </React.Fragment>
  );
}
