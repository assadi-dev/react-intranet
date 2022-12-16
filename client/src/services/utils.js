import { STORAGE_NAME } from "./const";

export const isEmpty = (value) => {
  if (Array.isArray(value)) {
    if (value === undefined || value == null || value.length == 0) return true;
    return false;
  } else {
    if (value === undefined || value == null || value.length == 0) return true;
    return false;
  }
};

export const sleep = async (time) => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve("Done !");
      clearTimeout(timeout);
    }, time);
  });
};

/**
 * Extraire le token depuis le localStorage
 */
export const extractToken = () => {
  try {
    if (!window.localStorage.getItem(STORAGE_NAME)) {
      throw new Error("Token n'est pas present dans le local storage");
    }

    let item = JSON.parse(window.localStorage.getItem(STORAGE_NAME));

    return item.token;
  } catch (error) {
    return null;
  }
};

export const extractIduser = () => {
  try {
    if (!window.localStorage.getItem(STORAGE_NAME)) {
      throw new Error("Token n'est pas present dans le local storage");
    }

    let item = JSON.parse(window.localStorage.getItem(STORAGE_NAME));
    return item.id;
  } catch (error) {
    return null;
  }
};

export const isAdmin = () => {
  try {
    if (!window.localStorage.getItem(STORAGE_NAME)) {
      throw new Error("Token n'est pas present dans le local storage");
    }
    let item = JSON.parse(window.localStorage.getItem(STORAGE_NAME));
    return item.isAdmin;
  } catch (error) {
    return null;
  }
};

export const getAge = (birthdate) => {
  const year = birthdate.split("-")[0];
  const month = birthdate.split("-")[1];
  const date = birthdate.split("-")[2];

  const birth = new Date(year, month, date).getFullYear();
  const dateNow = new Date().getFullYear();
  let result = Number(dateNow) - Number(birth);
  return result;
};

export const dateTimeTotimstamp = (datetime) => {
  const dt = new Date(datetime);
  return dt.getTime();
};
