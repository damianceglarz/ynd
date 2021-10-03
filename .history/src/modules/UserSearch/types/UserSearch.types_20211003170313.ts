export type ResultUser = {
  login: string;
};

export type ResultRepository = {
  id: number;
  name: string;
  description: string;
  watchers_count: number;
  owner: ResultUser;
};
