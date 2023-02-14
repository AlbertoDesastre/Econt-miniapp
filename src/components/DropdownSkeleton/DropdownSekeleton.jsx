import { useState } from "react";
import "./DropdownSkeleton.scss";

const DropdownSkeleton = () => {
  // eslint-disable-next-line
  const [displayList, setDisplayList] = useState(true);
  const onClick = () => {
    setDisplayList(!displayList);
  };

  return (
    <div className="dropdown-container dropdown-skeleton">
      <ul className="dropdown" onClick={onClick}>
        <p>Econt offices</p>
        {displayList && (
          <>
            <li className="dropdown-li">
              <p>Dedovo, in Plovdiv</p>
              <p>Has express delivery? No </p>
              <p>Postal code: 4106</p>
            </li>
            <li className="dropdown-li">
              <p>Dedovo, in Plovdiv</p>
              <p>Has express delivery? No </p>
              <p>Postal code: 4106</p>
            </li>
            <li className="dropdown-li">
              <p>Dedovo, in Plovdiv</p>
              <p>Has express delivery? No </p>
              <p>Postal code: 4106</p>
            </li>
          </>
        )}
      </ul>
      <p className="dropdown-arrow" onClick={onClick}>
        {" "}
        V{" "}
      </p>
    </div>
  );
};

export default DropdownSkeleton;
