import create from 'zustand';
import { persist } from 'zustand/middleware';

const AUTH_STORAGE = 'auth-storage';

export interface AuthState {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => unknown;
}

export const useAuthStore = create<AuthState>(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
      accessToken: null,
      setAccessToken: (accessToken) => {
        set({ accessToken });
      },
    }),
    {
      name: AUTH_STORAGE,
    }
  )
);

export const getToken = (): string | null => {
  const storage = localStorage.getItem(AUTH_STORAGE);
  if (!storage) return null;

  const { state } = JSON.parse(storage);
  return state.accessToken;
};

export const resetToken = (): void => {
  localStorage.removeItem(AUTH_STORAGE);
};
