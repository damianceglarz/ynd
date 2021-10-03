import axios from "axios";
import { config } from "src/config";

export const fetchUserRepositoriesBySubstring = (substring: string) => {
  return axios.get(config.apiUrl + `users/${substring}/repos`);
};
