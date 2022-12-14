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
  let token = "";

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
