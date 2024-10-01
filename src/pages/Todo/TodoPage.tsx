import { Link } from 'react-router-dom';
import { ToDoDashboard } from '../../module/todo';
import { ROUTES } from '../../constants/routes';

export default function TodoPage() {
  return (
    <div className="p-5">
      <Link to={ROUTES.HOME}>Back</Link>
      <h1 className="text-lg">TO DO</h1>
      <ToDoDashboard />
    </div>
  );
}
