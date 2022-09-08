import React from "react";
import baseUrl from "../common/url";
import { useState } from "react";
import RichTextEditor from "./Editors/RichTextEditor";
import axios from "axios";

const Add = () => {
  const [by_who, set_by_who] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      by_who: by_who,
      data: value,
      policy_title: title,
    };

    axios
      .post(baseUrl + "post", data)
      .then((response) => {
        console.log("Done, Posted", response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Who are you?:
        <input
          type="text"
          value={by_who}
          onChange={(event) => set_by_who(event.target.value)}
        ></input>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <RichTextEditor setValue={setValue} value={value}></RichTextEditor>
        <input
          type="submit"
          value="Add Policy"
          className="btn btn-block btn-dark"
        ></input>
      </form>
    </div>
  );
};

export default Add;
