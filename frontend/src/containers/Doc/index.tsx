import React, { useMemo, useState } from "react";
import IconBreadcrumbs from "./components/IconBreadcrumbs";
// Import the Slate editor factory.
import { createEditor, Descendant } from "slate";
// Import the Slate components and React plugin.
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import RichTextExample from "../Demo/index";
import "./index.css";

const style: React.CSSProperties = {
  width: 800,
  // height: 400,
  backgroundColor: "#ffff",
  boxShadow: "rgb(221, 221, 221) 0px 1px 5px 0px",
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
  const editor = useMemo(() => withReact(createEditor() as ReactEditor), []);
  const [value, setValue] = useState<Descendant[]>([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    } as Descendant,
  ]);

  // 渲染 Slate 上下文.
  return (
    <React.Fragment>
      <div className="nav-wrapper">
        <IconBreadcrumbs />
      </div>
      <div className="editor-wrapper">
        <div style={style}>
          {/* <Slate
            editor={editor}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          >
            <Editable
              onKeyDown={(event) => {
                if (event.key === "&") {
                  // 阻止插入 `&` 字符的默认事件
                  event.preventDefault();
                  // 执行 insertText 方法插入某些文本
                  editor.insertText("and");
                }
              }}
            />
          </Slate> */}
          <RichTextExample />
        </div>
      </div>
    </React.Fragment>
  );
}
