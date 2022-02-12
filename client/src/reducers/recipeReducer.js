import {
    RECIPE_FAIL,
    RECIPE_REQUEST,
    RECIPE_SUCCESS,
    RECIPE_BY_ID_FAIL,
    RECIPE_BY_ID_SUCCESS,
    RECIPE_BY_ID_REQUEST,
} from '../constants/recipes';

export const recipesReducer = (
    state = { recipes: {}, loading: true },
    action
) => {
    const { type, payload } = action;
    switch (type) {
        case RECIPE_REQUEST:
            return { ...state, loading: true };
        case RECIPE_SUCCESS:
            return { ...state, loading: false, recipes: payload };
        case RECIPE_FAIL:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};

export const recipeByIdReducer = (
    state = { recipe: {}, loading: true },
    action
) => {
    const { type, payload } = action;
    switch (type) {
        case RECIPE_BY_ID_REQUEST:
            return { ...state, loading: true };
        case RECIPE_BY_ID_SUCCESS:
            return { ...state, loading: false, recipe: payload };
        case RECIPE_BY_ID_FAIL:
            return { ...state, loading: false, error: payload };
        default:
            return state;
    }
};
