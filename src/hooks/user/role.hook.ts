import { useFetchList } from '~/hooks/common/request.hooks';
import { ROLE } from '~/http/endpoints';
import { SelectOption } from '~/interface/common.interface';

const ROLE_KEYS = {
  OPTIONS: 'role-options',
};

export const useRoleOptions = () =>
  useFetchList<SelectOption[]>([ROLE_KEYS.OPTIONS], ROLE.OPTIONS());
