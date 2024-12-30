import { create } from "zustand";

interface IUserStore {
  name?: string;
  tokenKey?: string;
  updateUser(token: string, name: string): void;
  resetUser(): void;
}

const useUserStore = create<IUserStore>((set) => ({
  updateUser: (newTokenKey: string, newName: string) =>
    set(() => ({
      tokenKey: newTokenKey,
      name: newName,
    })),
  resetUser: () =>
    set(() => ({
      tokenKey: undefined,
      name: undefined,
    })),
}));

export default useUserStore;
