import { AlertColor } from '@mui/material';
import create from 'zustand';

export interface NotificationState {
  message: string | null;
  type: AlertColor;
  setErrorMessage: (message: string) => unknown;
  setSuccessMessage: (message: string) => unknown;
  resetMessage: () => unknown;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  message: null,
  type: 'info',
  setErrorMessage: (message: string) => set({ message, type: 'error' }),
  setSuccessMessage: (message: string) => set({ message, type: 'success' }),
  resetMessage: () => set({ message: null }),
}));
