export type ResultRepository = {
  id: number;
  name: string;
  description: string;
  rating: number;
};

export type ResultUser = {
  username: string;
  repositories: ResultRepository[];
};
