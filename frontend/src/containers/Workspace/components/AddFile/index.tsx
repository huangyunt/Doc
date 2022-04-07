import React, { CSSProperties } from "react";
import { createDoc } from "../../../../utils/api";
import AddIcon from "../AddIcon";
import Icon from "../Icon";
import "./index.css";

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "72px",
  width: "254px",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.7,
  },
};

interface IProps {
  handleClick: () => void;
}
export const AddFile: React.FC<IProps> = ({
  handleClick,
}) => {
  return (
    <React.Fragment>
      <div style={boxStyle} onClick={handleClick}>
        <div className="card">
          <Icon />
          <div>
            <div
              style={{
                fontSize: "15px",
                marginLeft: "-16px",
              }}
            >
              New document
            </div>
            <div
              className="new_file_creation_topbar--subtext--3YpLo 
                     text--fontPos11--RSei3 
                     text--_fontBase--YWDo0"
            >
              Design and prototype
            </div>
          </div>
          <span
            style={{
              width: "32px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddIcon />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
