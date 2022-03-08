import { Link, useNavigate } from 'react-router-dom';
import { newRoutes } from '~/routes/new.routes';
const Links = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/roles');
  };
  return (
    <>
      {newRoutes.map((route) => (
        <li key={route.id} onClick={handleClick}>
          {route.title}
        </li>
      ))}
    </>
  );
};

export default Links;
