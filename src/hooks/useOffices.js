import { useState } from "react";
import usePostApi from "./usePostApi";

const useOffices = (props) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const callOffices = usePostApi(process.env.REACT_APP_API_URL_OFFICES, {
    countryCode: "BGR",
    cityID: 1,
  });
  const { data: officesData, loadingOffices, errorOffices } = callOffices;
  let offices = officesData.offices;

  console.log(offices);
  return {
    offices,
    loadingOffices,
    errorOffices,
  };
};

export default useOffices;
