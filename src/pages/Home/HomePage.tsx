import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useGetAllTodosQuery } from '../../services/todos';

export const HomePage = () => {
  const { data: todos, error, isLoading } = useGetAllTodosQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todos</div>;

  return (
    <div className="w-full">
      <Link to={ROUTES.TODO}>todo</Link>
      <ul>{todos?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
    </div>
  );
};
