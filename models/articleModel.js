import mongoose from 'mongoose';

const articleSchema = mongoose.Schema(
    {
        header: {
            type: String,
            required: true,
            trim: true,
        },
        summary: {
            type: String,
            trim: true,
        },
        author: {
            type: String,
            trim: true,
        },
        paragraphs: [
            {
                subheader: {
                    type: String,
                    trim: true,
                },
            },
            {
                text: {
                    type: String,
                    required: true,
                    trim: true,
                },
            },
        ],
        img: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Article = mongoose.model('article', articleSchema);

export default Article;
