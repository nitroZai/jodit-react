import React, { useRef, useEffect, useState, isValidElement } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import baseUrl from "../../common/url";

const RichTextEditorEdit = ({ setValue, value, id, saveEditValue }) => {
  const [config, setConfig] = useState({
    //   buttons: ["Bold", "Italic"],
    readonly: true,
    uploader: {
      insertImageAsBase64URI: true,
    },
    toolbarInlineForSelection: true,
    showPlaceholder: true,
  });

  const [isSaved, setIsSaved] = useState(true);

  const editor = useRef(value);

  const handleButton = () => {
    setConfig({ readonly: false });
    setIsSaved(false);
  };

  //   useEffect(() => {
  //     config.readonly = true;
  //   }, []);

  useEffect(() => {
    console.log(config);
  }, [config]);

  return (
    <>
      <JoditEditor
        ref={editor}
        onChange={(content) => setValue(content)}
        config={config}
        value={value}
      ></JoditEditor>
      <button onClick={handleButton} className="btn btn-primary">
        Edit?
      </button>
      <button
        onClick={() => saveEditValue()}
        disabled={isSaved}
        className="btn btn-secondary"
      >
        Save the changes
      </button>
    </>
  );
};

export default RichTextEditorEdit;
