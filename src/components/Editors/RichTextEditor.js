import React, { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const config = {
  //   buttons: ["Bold", "Italic"],
  readonly: false,
  uploader: {
    insertImageAsBase64URI: true,
  },
  toolbarInlineForSelection: true,
  showPlaceholder: true,
};

const RichTextEditor = ({ setValue, value }) => {
  const editor = useRef(value);

  return (
    <JoditEditor
      ref={editor}
      onChange={(content) => setValue(content)}
      config={config}
      value={value}
    ></JoditEditor>
  );
};

export default RichTextEditor;
