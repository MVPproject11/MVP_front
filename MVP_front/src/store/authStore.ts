import { create } from "zustand";

interface AuthState {
  user: {
    email: string;
    role: string;
  } | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (user: { email: string; role: string }, token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,
  login: (user, token) =>
    set({ user, token, isLoggedIn: true }),
  logout: () =>
    set({ user: null, token: null, isLoggedIn: false }),
}));

export default useAuthStore;