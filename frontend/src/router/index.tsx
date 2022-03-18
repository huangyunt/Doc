import { Route, Routes, Link } from "react-router-dom";
import WorkSpace from "../containers/Workspace";
import Login from "../containers/Login";
import Doc from "../containers/Doc";
import React from "react";
export default function IRouter() {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/login">to login</Link>
                </li>
                <li>
                    <Link to="/workspace">to workspace</Link>
                </li>
                <li>
                    <Link to="/doc">to doc</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/workspace" element={<WorkSpace />} />
                <Route path="/doc" element={<Doc />} />
            </Routes>
        </React.Fragment>
    );
}
