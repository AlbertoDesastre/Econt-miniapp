import { useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [items, setItems] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  try {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorage.getItem(itemName));
    }

    setItems(parsedItem);
    setLoading(false);
  } catch (error) {
    setError(error);
  }

  const saveItems = (newItem) => {
    let newItemStringified = JSON.stringify(newItem);
    localStorage.setItem(itemName, newItemStringified);
    setItems(newItem);
  };

  return { saveItems, items, loading, error };
};
