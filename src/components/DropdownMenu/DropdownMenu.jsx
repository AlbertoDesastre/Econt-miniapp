import { useState } from "react";
import "../DropdownSkeleton/DropdownSkeleton.scss";

const DropdownMenu = ({ children }) => {
  return (
    <div className="dropdown-container">
      <p className="dropdown-title">Econt offices</p>
      {<ul className="dropdown">{children}</ul>}
    </div>
  );
};

export default DropdownMenu;
