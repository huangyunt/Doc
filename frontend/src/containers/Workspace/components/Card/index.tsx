import React from "react";
import Icon from "../Icon";
import "./index.css";
const Card: React.FC = () => {
  return (
    <div className="card-wrapper">
      <img
        style={{ display: "block", height: "134px" }}
      ></img>
      <div className="card-bottom-wrapper">
        <Icon />
        <div className="flex-card-wrapper">
          <div
            style={{
              fontSize: "15px",
              textAlign: "left",
            }}
          >
            untitle
          </div>
          <div
            className="new_file_creation_topbar--subtext--3YpLo 
                     text--fontPos11--RSei3 
                     text--_fontBase--YWDo0"
          >
            Design and prototype
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
