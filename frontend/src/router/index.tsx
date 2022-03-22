import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import WorkSpace from "../containers/Workspace";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Doc from "../containers/Doc";

export default function IRouter() {
  const style: React.CSSProperties = {
    listStyle: "none",
  };
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/workspace" element={<WorkSpace />} />
        <Route path="/" element={<Doc />} />
      </Routes>
      <ul style={style}>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
        <li>
          <Link to="/workspace">workspace</Link>
        </li>
        <li>
          <Link to="/">doc</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
