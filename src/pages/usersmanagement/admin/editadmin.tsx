import AdminForm from './adminform';
import { useParams } from 'react-router-dom';
import { useAdminItem } from '~/hooks/user/admin.hook';

const EditNewAdmin = () => {
  const { id } = useParams();
  const { isLoading, item: admin } = useAdminItem(id || '');
  return <AdminForm admin={admin} loading={isLoading} />;
};

export default EditNewAdmin;
