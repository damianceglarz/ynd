export type ResultRepository = {
  id: number;
  name: string;
  description: string;
  watchers_count: number;
  owner: {
    username: string;
  };
};
