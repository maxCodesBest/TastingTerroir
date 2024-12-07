import { ITastingNote } from "@/interfaces/ITastingNote";
import { create } from "zustand";

interface ITastingNoteStore extends ITastingNote {
  updateNote(newNote: ITastingNote): void;
}

const useTastingNotesStore = create<ITastingNoteStore>((set) => ({
  general: {},
  appearance: {},
  nose: {},
  palate: {},
  conclusion: {},
  updateNote: (newNote: ITastingNote) =>
    set(() => ({
      userId: newNote.userId,
      general: newNote.general,
      appearance: newNote.appearance,
      nose: newNote.nose,
      palate: newNote.palate,
      conclusion: newNote.conclusion,
    })),
}));

export default useTastingNotesStore;
