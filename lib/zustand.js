import { create } from 'zustand';

export const useTheme = create((set) => ({
  theme: 'dark',
  switchTheme: () =>
    set((state) =>
      state.theme === 'dark' ? { theme: 'light' } : { theme: 'dark' }
    ),
}));
