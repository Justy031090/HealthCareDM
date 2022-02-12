import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema(
    {
        header: {
            type: String,
            required: true,
            trim: true,
        },
        isSymbols: [
            {
                dairyFree: {
                    type: Boolean,
                },
                freezerSafe: {
                    type: Boolean,
                },
                glutenFree: {
                    type: Boolean,
                },
                lowFat: {
                    type: Boolean,
                },
                lowSugar: {
                    type: Boolean,
                },
                nutFree: {
                    type: Boolean,
                },
                vegan: {
                    type: Boolean,
                },
                vegeterian: {
                    type: Boolean,
                },
            },
        ],
        sybmols: [{ type: String }],

        img: {
            type: String,
            required: true,
            trim: true,
        },
        serving_size: {
            type: String,
            required: true,
        },
        number_of_serves: {
            type: Number,
            required: true,
        },
        preparation_time: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        nutrions: [
            {
                kCal: {
                    type: Number,
                    required: true,
                },
                carbs: {
                    type: Number,
                    required: true,
                },
                fibre: {
                    type: Number,
                    required: true,
                },
                protein: {
                    type: Number,
                    required: true,
                },
                fat: {
                    type: Number,
                    required: true,
                },
                saturates: {
                    type: Number,
                    required: true,
                },
                sugars: {
                    type: Number,
                    required: true,
                },
                salt: {
                    type: Number,
                    required: true,
                },
            },
        ],
        preparations_steps: [
            {
                type: String,
                required: true,
            },
        ],
        ingredients: [
            {
                type: String,
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Recipe = mongoose.model('recipes', recipeSchema);

export default Recipe;
