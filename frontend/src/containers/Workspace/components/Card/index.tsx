import React from "react";
import Icon from "../Icon";
import "./index.css";
interface IProps {
  title: string;
  createTime: string;
  imgUrl: string;
}
const Card: React.FC<IProps> = ({
  title,
  createTime,
  imgUrl,
}) => {
  return (
    <div className="card-wrapper">
      <img
        style={{
          display: "block",
          height: "134px",
          width: "100%",
        }}
        src={imgUrl}
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
            {title}
          </div>
          <div
            className="new_file_creation_topbar--subtext--3YpLo 
                     text--fontPos11--RSei3 
                     text--_fontBase--YWDo0"
          >
            {createTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
