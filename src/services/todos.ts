import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => 'todos',
    }),
  }),
});

export const { useGetAllTodosQuery } = todosApi;
