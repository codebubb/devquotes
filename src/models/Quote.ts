import mongoose from 'mongoose';

const { Schema } = mongoose;

const quoteSchema = new Schema(
    {
        text: String,
        author: String,
        __v: { type: Number, select: false },
    },
    {
        timestamps: true,
    }
);

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
