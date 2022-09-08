import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import baseUrl from "../common/url";
import RichTextEditor from "./Editors/RichTextEditor";
import { useState } from "react";
import RichTextEditorEdit from "./Editors/RichTextEditorEdit";

const Edit = () => {
  const { id } = useParams();
  const [value, setValue] = useState({});
  // const [value, setValue] = useState("");
  //   useEffect(() => {
  //     callingBackendGET(id);
  //   }, [prev]);

  // const callingBackendPOST = (id) => {
  //   const data = {
  //     data: value,
  //   };

  //   axios
  //     .post(baseUrl + "post/" + id, data)
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  // };

  const callingBackendGET = (id) => {
    axios
      .get(baseUrl + "get/" + id)
      .then((response) => setValue(response.data))
      .catch((error) => console.log(error));
  };

  const handleSave = () => {
    const data = {
      data: value,
    };

    console.log(value);

    axios
      .post(baseUrl + "post/" + id, data)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    callingBackendGET(id);
  }, []);

  // useEffect(() => {
  //   callingBackendPOST(id);
  // }, [value]);

  // console.log("The value of the data", value);

  return (
    <div>
      <RichTextEditorEdit
        setValue={setValue}
        value={value.data}
        saveEditValue={handleSave}
        id={id}
      ></RichTextEditorEdit>
    </div>
  );
};

export default Edit;
