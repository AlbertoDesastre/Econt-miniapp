import { useState } from "react";
import "./DropdownMenu.scss";

const DropdownMenu = ({ title, changeDropdown, children }) => {
  return (
    <div className="dropdown-container" onClick={changeDropdown}>
      <p className="dropdown-title">{title}</p>
      {<ul className="dropdown">{children}</ul>}
    </div>
  );
};

export default DropdownMenu;
