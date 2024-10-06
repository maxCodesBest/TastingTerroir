import { string } from 'joi';
import mongoose, { Schema } from 'mongoose';

export const testableSchema = new Schema({ text: { type: String, required: true }, number: { type: Number, required: true } }, { timestamps: true });

export const TestableModel = mongoose.model('TestableModel', testableSchema);
