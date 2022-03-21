import React from "react";
import ReEditor from "re-editor";
import IconBreadcrumbs from "./components/IconBreadcrumbs";
import "re-editor/lib/styles/index.css";
import "./index.css";
export default function Doc() {
  return (
    <React.Fragment>
      <div className="nav-wrapper">
        <IconBreadcrumbs />
      </div>
      <div className="editor-wrapper"></div>
    </React.Fragment>
  );
}
