import mongoose, { Schema } from 'mongoose';

const TastingNote = {
    isBlindTaste: { type: Boolean, required: true },
    bottleInfo: {
        name: { type: String, required: false },
        producer: { type: String, required: false },
        country: { type: String, required: false },
        region: { type: String, required: false },
        vintage: { type: Number, required: false },
        image: { type: String, required: false }
    },
    general: { wineType: { type: String, required: true }, color: { type: String, required: true } },
    appearance: {
        clarity: { required: false, type: String },
        colorIntensity: { required: false, type: String },
        color: { required: false, type: String }
    },
    nose: {
        condition: { required: false, type: String },
        intensity: { required: false, type: String },
        characteristics: { required: false, type: String },
        development: { required: false, type: String }
    },
    palate: {
        sweetness: { required: false, type: String },
        acidity: { required: false, type: String },
        tannins: { required: false, type: String },
        alcohol: { required: false, type: String },
        body: { required: false, type: String },
        intensity: { required: false, type: String },
        characteristics: { required: false, type: String },
        finish: { required: false, type: String }
    },
    conclusion: {
        qualityLevel: { required: false, type: String },
        readinessLevel: { required: false, type: String }
    }
};

const tastingNoteSchema = new Schema(TastingNote, { timestamps: true });

export const TastingNoteModel = mongoose.model('tastingNote', tastingNoteSchema);
