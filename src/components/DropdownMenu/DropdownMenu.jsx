import { useState } from "react";
import "./DropdownMenu.scss";

const DropdownMenu = ({ children }) => {
  return (
    <div className="dropdown">
      {<ul className="dropdown-ul">{children}</ul>}
    </div>
  );
};

export default DropdownMenu;
