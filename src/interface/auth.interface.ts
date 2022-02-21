export interface Role {
  id: number;
  name: string;
  isSuperAdmin: boolean;
  permissions: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  suspended: boolean;
  lastLogin: null | Date;
  role?: Role;
}
