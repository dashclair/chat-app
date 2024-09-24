import { Link } from 'react-router-dom';
import { DashboardForm } from '../../module/Dashboard';
import { ROUTES } from '../../constants/routes';

export const HomePage = () => {
  return (
    <div className="w-full">
      <Link to={ROUTES.TODO}>todo</Link>
      <DashboardForm />
    </div>
  );
};
