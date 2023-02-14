import { useState } from "react";
import "./DropdownMenu.scss";

const DropdownMenu = ({ children }) => {
  return (
    <div className="dropdown-container">
      <p className="dropdown-title">Econt offices</p>
      {<ul className="dropdown">{children}</ul>}
    </div>
  );
};

export default DropdownMenu;
