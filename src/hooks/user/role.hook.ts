import { ROLE } from '~/http/endpoints';
import { SelectOption } from '~/interface/common.interface';
import { MutationOptions } from '~/interface/common.interface';
import {
  useDeleteRequest,
  useFetchItem,
  useFetchList,
  useSaveRequest,
} from '~/hooks/common/request.hooks';
import queryClient from '~/http/queryClient';
import { useNavigate } from 'react-router-dom';

const ROLE_KEYS = {
  OPTIONS: 'role-options',
};
const PERM_KEYS = {
  OPTIONS: 'permissions',
};

export const useRoleOptions = () =>
  useFetchList<SelectOption[]>([ROLE_KEYS.OPTIONS], ROLE.OPTIONS());

export const usePermissionsOptions = () =>
  useFetchList<SelectOption[]>([PERM_KEYS.OPTIONS], ROLE.PERMISSIONS());

export const useSaveRole = (options?: MutationOptions) => {
  const navigate = useNavigate();
  const endpoint = options?.id ? ROLE.SINGLE(options?.id) : ROLE.BASE;
  const onSuccess = () => {
    queryClient.invalidateQueries(ROLE_KEYS.OPTIONS);
    navigate('/roles');
  };
  return useSaveRequest(endpoint, {
    ...options,
    editing: !!options?.id,
    onSuccess: options?.onSuccess || onSuccess,
  });
};
