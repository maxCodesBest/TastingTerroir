import { INewTastingNote } from "@/interfaces/ITastingNote";
import { create } from "zustand";

interface ITastingNoteStore extends INewTastingNote {
  updateNote(newNote: INewTastingNote): void;
  resetNote(): void;
}

const useTastingNotesStore = create<ITastingNoteStore>((set) => ({
  general: {},
  appearance: {},
  nose: {},
  palate: {},
  conclusion: {},
  updateNote: (newNote: INewTastingNote) =>
    set(() => ({
      general: newNote.general,
      appearance: newNote.appearance,
      nose: newNote.nose,
      palate: newNote.palate,
      conclusion: newNote.conclusion,
    })),
  resetNote: () =>
    set(() => ({
      general: {},
      appearance: {},
      nose: {},
      palate: {},
      conclusion: {},
    })),
}));

export default useTastingNotesStore;
