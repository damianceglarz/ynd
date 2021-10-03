export type ResultRepository = {
  id: number;
  title: string;
  description: string;
  rating: number;
};

export type ResultUser = {
  username: string;
  repositories: ResultRepository[];
};
