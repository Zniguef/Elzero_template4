export const getLocalStorageData = (itemToGet) =>
  JSON.parse(window.localStorage.getItem(itemToGet));
