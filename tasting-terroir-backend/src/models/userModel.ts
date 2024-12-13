import mongoose, { Schema } from 'mongoose';
import { isEmail } from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
    {
        name: { type: String, required: true, minlength: 3 },
        email: { type: String, index: true, required: true, unique: true, lowercase: true, validate: [isEmail, 'Please enter a valid email'] },
        password: { type: String, required: true, minlength: 3 },
        collections: { type: [String], required: true }
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    next();
});

export const UserModel = mongoose.model('user', userSchema);
