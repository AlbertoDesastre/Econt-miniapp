import { useState } from "react";
import "./DropdownMenu.scss";

const DropdownMenu = ({ title, children }) => {
  return (
    <div className="dropdown-container">
      <p className="dropdown-title">{title}</p>
      {<ul className="dropdown">{children}</ul>}
    </div>
  );
};

export default DropdownMenu;
