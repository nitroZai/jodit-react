import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to={"/"} className="navbar-brand" href="#">
        RichTextEditor.Co
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to={"add"} className="nav-link" href="#">
              Add Items
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
