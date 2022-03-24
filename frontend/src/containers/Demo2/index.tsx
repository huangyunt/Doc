// Import the `Editor` and `Transforms` helpers from Slate.
import { useMemo, useState, useCallback } from "react";
import { createEditor, Descendant, Editor, Transforms } from "slate";
import { Editable, Slate, withReact } from "slate-react";
const App = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ] as Descendant[]);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            case "`": {
              event.preventDefault();
              //@ts-ignore
              const [match] = Editor.nodes(editor, {
                //@ts-ignore
                match: (n) => n.type === "code",
              });
              Transforms.setNodes(
                editor,
                //@ts-ignore
                { type: match ? null : "code" },
                { match: (n) => true }
              );
              break;
            }

            case "b": {
              event.preventDefault();
              Transforms.setNodes(
                editor,
                { bold: true },
                //@ts-ignore
                { match: (n) => true, split: true }
              );
              break;
            }
          }
        }}
      />
    </Slate>
  );
};

const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
    >
      {props.children}
    </span>
  );
};
const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};
export default App;
