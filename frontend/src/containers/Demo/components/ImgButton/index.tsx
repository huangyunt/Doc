import imageExtensions from "image-extensions";
import isUrl from "is-url";
import { Transforms } from "slate";
import { useSlateStatic } from "slate-react";

import { Button, Icon } from "../../components";
import { ImageElement } from "../../../../types/custom-types";
export const InsertImageButton = () => {
  const editor = useSlateStatic();
  const insertImage = (editor, url) => {
    const text = { text: "" };
    const image: ImageElement = {
      type: "image",
      url,
      children: [text],
    };
    Transforms.insertNodes(editor, image);
  };

  const isImageUrl = (url) => {
    if (!url) return false;
    if (!isUrl(url)) return false;
    const ext = new URL(url).pathname.split(".").pop();
    return imageExtensions.includes(ext as string);
  };
  return (
    <Button
      onMouseDown={(event) => {
        event.preventDefault();
        const url = window.prompt(
          "Enter the URL of the image:"
        );
        // if (url && !isImageUrl(url)) {
        //   alert("URL is not an image");
        //   return;
        // }
        insertImage(editor, url);
      }}
    >
      <Icon>image</Icon>
    </Button>
  );
};
