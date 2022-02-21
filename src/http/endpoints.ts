export const AUTH = {
  LOGIN: '/auth/login',
  PROFILE: '/auth/profile',
  LOGOUT: '/auth/logout',
};

export const ROLE = {
  BASE: '/role' as const,
  OPTIONS: () => `${ROLE.BASE}/options`,
  PERMISSIONS: () => `${ROLE.BASE}/permissions`,
  SINGLE: (id: string | number) => `${ROLE.BASE}/${id}`,
};

export const ADMIN_USER = {
  BASE: '/admin' as const,
  SINGLE: (id: string | number) => `${ADMIN_USER.BASE}/${id}`,
};

export const CATEGORY_PRODUCT = {
  BASE: '/category' as const,
  OPTIONS: () => `${CATEGORY_PRODUCT.BASE}/options`,
  SINGLE: (id: string | number) => `${CATEGORY_PRODUCT.BASE}/${id}`,
};

export const PRODUCT = {
  BASE: '/product' as const,
  SINGLE: (id: string | number) => `${PRODUCT.BASE}/${id}`,
  VARIANT: (id: string | number) => `${PRODUCT.SINGLE(id)}/variant`,
  VARIANT_SINGLE: (productId: string | number, id: string | number) =>
    `${PRODUCT.VARIANT(productId)}/${id}`,
};
