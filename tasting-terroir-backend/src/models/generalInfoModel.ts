import mongoose, { Schema } from 'mongoose';

const GeneralInfo = {
    infoGroup: { required: true, type: String, index: true },
    title: { required: true, type: String, unique: true },
    text: { required: true, type: String }
};

const generalInfoSchema = new Schema(GeneralInfo, { timestamps: true });

export const GeneralInfoModel = mongoose.model('generalInfo', generalInfoSchema);
