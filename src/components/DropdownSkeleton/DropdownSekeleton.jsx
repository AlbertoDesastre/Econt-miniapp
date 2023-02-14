import { useState } from "react";
import DropdownItem from "../DropdownItem/DropdownItem";
import "../DropdownMenu/DropdownMenu.scss";

const DropdownSkeleton = () => {
  // eslint-disable-next-line
  const [displayList, setDisplayList] = useState(false);
  const onClick = () => {
    setDisplayList(!displayList);
  };

  return (
    <div className="dropdown-container dropdown-skeleton">
      <p className="dropdown-title" onClick={onClick}>
        Econt offices
      </p>

      <ul className="dropdown">
        {displayList && (
          <>
            <DropdownItem
              id={1}
              postalCode={4106}
              nameEn={"Dedovo"}
              regionNameEn={"Plovdiv"}
              expressCityDeliveries={true}
            />
            <DropdownItem
              id={1}
              postalCode={4106}
              nameEn={"Dedovo"}
              regionNameEn={"Plovdiv"}
              expressCityDeliveries={true}
            />
            <DropdownItem
              id={1}
              postalCode={4106}
              nameEn={"Dedovo"}
              regionNameEn={"Plovdiv"}
              expressCityDeliveries={true}
            />
          </>
        )}
      </ul>
      {/*       <p className="dropdown-arrow" onClick={onClick}>
        {" "}
        V{" "}
      </p> */}
    </div>
  );
};

export default DropdownSkeleton;
