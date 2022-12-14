import React, { useEffect, useState } from "react";
import { isEmpty } from "../../services/utils";

const useStorage = (name, value) => {
  const [data, setData] = useState("");

  useEffect(() => {
    let item = "";
    if (isEmpty(name)) {
      throw new Error("le name vide ou innexistant");
    }
    if (window.localStorage.getItem(name)) {
      item = window.localStorage.getItem(name);
      let toArray = JSON.parse(item);

      setData(toArray);
    }
  }, []);

  const setItem = (value) => {
    try {
      if (isEmpty(name)) {
        throw new Error("le name vide ou innexistant");
      }

      let toJSON = JSON.stringify(value);
      window.localStorage.setItem(name, toJSON);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getItem = (name) => {
    let item = null;
    if (isEmpty(name)) {
      throw new Error("le name vide ou innexistant");
    }
    if (window.localStorage.getItem(name)) {
      item = window.localStorage.getItem(name);
      let toArray = JSON.parse(item);

      setData((prevState) => (prevState = toArray));
    }

    return item;
  };

  const removeItem = (name) => {
    if (isEmpty(name)) {
      throw new Error("le name vide ou innexistant");
    }

    if (window.localStorage.getItem(name)) {
      window.localStorage.removeItem(name);
    }
  };

  const clear = () => {
    window.localStorage.clear();
  };

  return {
    setItem,
    getItem,
    removeItem,
    clear,
    data,
  };
};

export default useStorage;
