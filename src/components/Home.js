import React from "react";
import RichTextEditor from "./Editors/RichTextEditor";
import { useState } from "react";
import ListGroup from "./ListGroup";

const Home = () => {
  const [value, setValue] = useState("");

  return (
    <div className="row">
      <div className="col-md-6" style={{ margin: "auto", marginTop: "50px" }}>
        <div style={{ textAlign: "center" }}>
          <h3>Rich Text Editor</h3>
          {/* <RichTextEditor setValue={setValue} value={value}></RichTextEditor> */}
          <ListGroup />
        </div>
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default Home;
