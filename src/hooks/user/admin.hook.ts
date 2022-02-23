import { useNavigate } from 'react-router-dom';
import { useDeleteRequest, useFetchList, useSaveRequest } from '~/hooks/common/request.hooks';
import { ADMIN_USER } from '~/http/endpoints';
import queryClient from '~/http/queryClient';
import { User } from '~/interface/auth.interface';
import { MutationOptions } from '~/interface/common.interface';

const KEY = 'admin-users';

export const useAdminUserList = () => useFetchList<User[]>([KEY], ADMIN_USER.BASE);

export const useSaveAdminUser = (options?: MutationOptions) => {
  const navigate = useNavigate();
  const endpoint = options?.id ? ADMIN_USER.SINGLE(options.id) : ADMIN_USER.BASE;
  const onSuccess = (data: any) => {
    queryClient.invalidateQueries(KEY);
    navigate('/admin');
  };

  return useSaveRequest(endpoint, {
    ...options,
    editing: !!options?.id,
    onSuccess: options?.onSuccess || onSuccess,
  });
};

export const useDeleteAdminUser = (options?: MutationOptions) => {
  return useDeleteRequest(KEY, ADMIN_USER.SINGLE, options);
};
