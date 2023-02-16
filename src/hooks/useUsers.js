import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useUsers = () => {
  const users = [
    { id: 1, name: "Dimitri", region: "Plovdiv", city: "Asenovgrad" },
    { id: 2, name: "Alberto", region: "Burgas", city: "Pomorie" },
    { id: 3, name: "Ana", region: "Sofia", city: "Kostenets" },
    { id: 4, name: "Dri", region: "Veliko Tyrnovo", city: "Svishtov" },
    { id: 5, name: "Carlos", region: "Silistra", city: "Aydemir" },
    { id: 6, name: "Olena", region: "Blagoevgrad", city: "Bansko" },
  ];

  /*   const { saveItems } = useLocalStorage("users", []);
  saveItems(users); */

  const [userSelected, setUserSelected] = useState(users[0].id);
  const [userSelectedInfo, setUserSelectedInfo] = useState(users[userSelected]);

  /*   console.log(userSelected);
   */
  console.log(userSelectedInfo);
  return {
    users,
    userSelected,
    userSelectedInfo,
    setUserSelected,
    setUserSelectedInfo,
  };
};

export default useUsers;
