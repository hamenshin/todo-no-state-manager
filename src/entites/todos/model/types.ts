type TodoDTO = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  isFavorite: boolean;
};

export type Todos = TodoDTO[];
