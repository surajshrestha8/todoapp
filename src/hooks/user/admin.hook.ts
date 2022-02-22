import { useFetchList } from '~/hooks/common/request.hooks';
import { ADMIN_USER } from '~/http/endpoints';
import { User } from '~/interface/auth.interface';

const KEY = 'admin-users';

export const useAdminUserList = () => useFetchList<User[]>([KEY], ADMIN_USER.BASE);
