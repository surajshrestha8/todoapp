import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface AuthState {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => unknown;
}

export const useAuthStore = create<AuthState>(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken })
    }),
    {
      name: 'auth-storage'
    }
  )
);
