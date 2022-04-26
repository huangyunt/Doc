import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import WorkSpace from "../containers/Workspace";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Doc from "../containers/Doc";
import Test from "../containers/Demo2";
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
        <Route path="/doc" element={<Doc />} />
        <Route path="/" element={<WorkSpace />} />
      </Routes>
      <ul style={style}>
        <li>
          {/* <Link to="/login">login</Link> */}
          <a href="/login">login</a>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
        <li>
          <Link to="/workspace">workspace</Link>
        </li>
        <li>
          <a href="/doc">doc</a>
        </li>
      </ul>
    </React.Fragment>
  );
}
