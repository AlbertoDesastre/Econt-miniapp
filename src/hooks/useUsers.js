import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useUsers = () => {
  const users = [
    {
      id: 1,
      name: "Dimitri",
      region: "Plovdiv",
      city: "Asenovgrad",
      cityId: 3,
    },
    { id: 2, name: "Alberto", region: "Burgas", city: "Pomorie", cityId: 67 },
    { id: 3, name: "Ana", region: "Sofia", city: "Kostenets", cityId: 21 },
    {
      id: 4,
      name: "Dri",
      region: "Veliko Tyrnovo",
      city: "Svishtov",
      cityId: 73,
    },
    { id: 5, name: "Carlos", region: "Silistra", city: "Aydemir", cityId: 80 },
    { id: 6, name: "Olena", region: "Blagoevgrad", city: "Bansko", cityId: 88 },
  ];

  /*   const { saveItems } = useLocalStorage("users", []);
  saveItems(users); */

  const [userSelected, setUserSelected] = useState(users[0].id);
  const [userPreferredCity, setUserPreferredCity] = useState(1);
  /*   console.log(userSelected);
   */
  return {
    users,
    userSelected,
    setUserSelected,
  };
};

export default useUsers;
