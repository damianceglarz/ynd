export type ResultRepository = {
  title: string;
  description: string;
  rating: number;
};

export type ResultUser = {
  username: string;
  repositories: ResultRepository[];
};
