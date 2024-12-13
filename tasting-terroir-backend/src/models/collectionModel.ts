import mongoose, { Schema } from 'mongoose';

const collectionSchema = new Schema(
    {
        title: { type: String, required: true, minlength: 3 },
        participantNames: { type: [String], required: true },
        profileImages: { type: [String], default: [] },
        noteIds: { type: [String], default: [] }
    },
    { timestamps: true }
);

export const CollectionModel = mongoose.model('collection', collectionSchema);
