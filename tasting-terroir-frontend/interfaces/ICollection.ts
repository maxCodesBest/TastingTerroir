import IBase from "./IBase";

export interface ICollection extends IBase, INewCollection {}

export interface INewCollection {
  title: string;
  participantNames: string[];
  profileImages?: string[];
  noteIds?: string[];
}

export interface ICollectionTitles {
  id: string;
  title: string;
}
