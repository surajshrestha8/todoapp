import { useParams } from 'react-router-dom';
import { useFetchItem } from './adminhooks';
import AdminPage from './adminform';
const EditAdmin = () => {
  const params = useParams();
  const { data } = useFetchItem(params.id, 'admin/');

  return <AdminPage admin={data} />;
};

export default EditAdmin;
