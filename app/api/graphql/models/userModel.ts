import { User } from '@/types/DBTypes';
import mongoose from 'mongoose';

const User = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.models.User || mongoose.model<User>('User', User);