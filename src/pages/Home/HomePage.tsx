import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export const HomePage = () => {
  return (
    <div className="w-full">
      <Link to={ROUTES.TODO}>todo</Link>
    </div>
  );
};
