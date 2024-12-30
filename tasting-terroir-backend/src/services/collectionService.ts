import mongoose from 'mongoose';
import { CollectionModel } from '../models/collectionModel';

export function addNoteToCollections(collectionsToEnlist: string[], noteId: string, profileImage?: string) {
    collectionsToEnlist.map(async (id) => {
        const document = await CollectionModel.findById(id);
        if (document) {
            if (profileImage) {
                if (document.profileImages.length < 4) {
                    document.profileImages.push(profileImage);
                } else if (!document.profileImages) {
                    document.profileImages = [profileImage];
                }
            }
            document.noteIds.push(noteId);
            document.save();
        }
        //TODO - add error handling for when we got a collection id in the array from the frontend but it doesnt exist in the backend (so where did we got it from?)
    });
}

export function createNewCollection(title: string, owner: string): string {
    const document = new CollectionModel({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        participantNames: [owner]
    });
    document.save();
    return document._id.toString();
}

export async function getCollectionTitlesByIds(ids: string[]) {
    const collectionTitles = await CollectionModel.find({ _id: { $in: ids } }, { _id: 0, id: '$_id', title: 1 });
    return collectionTitles;
}

export async function getCollectionsByIds(ids: string[]) {
    const collections = await CollectionModel.find({ _id: { $in: ids } });
    return collections;
}
