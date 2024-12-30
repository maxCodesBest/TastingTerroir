import { create } from "zustand";

interface ICollectionStore {
  noteIds?: string[];
  updateCollection(noteIds: string[]): void;
}

const useCollectionStore = create<ICollectionStore>((set) => ({
  updateCollection: (newNoteIds: string[]) =>
    set(() => ({
      noteIds: newNoteIds,
    })),
}));

export default useCollectionStore;
