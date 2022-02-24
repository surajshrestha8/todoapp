import { useParams } from 'react-router-dom';
import AdminForm from '~/components/admin/AdminForm';
import { useAdminItem } from '~/hooks/user/admin.hook';

const EditAdminPage = () => {
  const { id } = useParams();
  const { isLoading, item: admin } = useAdminItem(id || '');
  return <AdminForm admin={admin} loading={isLoading} />;
};

export default EditAdminPage;
