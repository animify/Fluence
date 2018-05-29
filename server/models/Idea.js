import { Schema } from 'mongoose';
import shortid from 'shortid';
import User from './User';

const Idea = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    summary: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
        default: 0
    },
    details: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        required: true,
        default: 0
    },
    by: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    comments: [{
        body: {
            type: String,
            required: true
        },
        by: {
            type: Schema.Types.ObjectId,
            ref: User
        },
        created_at: {
            type: Date,
            default: Date.now
        }
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
});

export default Idea;
