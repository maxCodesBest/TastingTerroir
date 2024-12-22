import { UserModel } from '../models/userModel';

export async function addCollectionToUser(userId: string, collectionId: string) {
    const document = await UserModel.findById(userId);
    if (document) {
        document.collections.push(collectionId);
        document.save();
    }
}
