export type ResultRepository = {
  id: number;
  name: string;
  description: string;
  watchers_count: number;
};

export type ResultUser = {
  username: string;
  repositories: ResultRepository[];
};
