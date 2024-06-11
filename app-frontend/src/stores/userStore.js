import { create } from 'zustand';

const useUserStore = create((set) => ({
  user_id: null,
  user_token: null,
  setUser: (id, token) => set({ user_id: id, user_token: token }),
  clearUser: () => set({ user_id: null, user_token: null }),
}));

export default useUserStore;
