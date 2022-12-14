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
