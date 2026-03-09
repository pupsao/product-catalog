import { create } from 'zustand';

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
  setDarkMode: (value: boolean) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDark: false,

  toggleTheme: () =>
    set((state) => ({
      isDark: !state.isDark,
    })),

  setDarkMode: (value: boolean) =>
    set({
      isDark: value,
    }),
}));
