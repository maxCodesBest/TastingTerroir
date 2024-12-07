import { create } from "zustand";

interface IUserStore {
  tokenKey?: string;
  updateUser(token: string): void;
  resetUser(): void;
}

const useUserStore = create<IUserStore>((set) => ({
  updateUser: (newTokenKey: string) =>
    set(() => ({
      tokenKey: newTokenKey,
    })),
  resetUser: () =>
    set(() => ({
      tokenKey: undefined,
    })),
}));

export default useUserStore;
