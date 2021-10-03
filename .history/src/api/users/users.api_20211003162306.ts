import axios from "axios";

export const getUserBySubstring = (substring: string) => {
  return axios.get(apiURL);
};
