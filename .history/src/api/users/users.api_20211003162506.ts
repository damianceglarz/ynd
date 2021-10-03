import axios from "axios";
import { config } from "src/config";

export const getUserBySubstring = (substring: string) => {
  return axios.get(config.apiUrl + `users/${substring}/repos`);
};
