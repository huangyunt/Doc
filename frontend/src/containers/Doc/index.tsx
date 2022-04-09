import React from "react";
import IconBreadcrumbs from "../../components/IconBreadcrumbs";
// Import the Slate components and React plugin.
import RichTextExample from "../Demo/index";
import "./index.css";

const style: React.CSSProperties = {
  width: 800,
  minHeight: 800,
  backgroundColor: "#ffff",
  boxShadow: "rgb(221, 221, 221) 0px 1px 5px 0px",
  padding: "20px",
};

// const initialState = State.fromJSON({
//   document: {
//     nodes: [
//       {
//         kind: 'block',
//         type: 'paragraph',
//         nodes: [
//           {
//             kind: 'text',
//             ranges: [
//               {
//                 text: 'A line of text in a paragraph.'
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// })
export default function Doc() {
  // 渲染 Slate 上下文.
  return (
    <React.Fragment>
      <IconBreadcrumbs />
      <div className="editor-wrapper">
        <div style={style}>
          <RichTextExample />
        </div>
      </div>
    </React.Fragment>
  );
}
