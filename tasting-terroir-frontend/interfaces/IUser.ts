import IBase from "./IBase";

export interface IUser extends IBase, INewUser {}

export default interface INewUser {
  name: string;
  email: string;
  password: string;
  collectionIds?: string[];
}
