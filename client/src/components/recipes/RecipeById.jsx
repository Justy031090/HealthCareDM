import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecipeById } from '../../actions/recipesActions';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const RecipeById = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const recipeState = useSelector((state) => state.recipe);
    const { loading, recipe } = recipeState;

    useEffect(() => {
        dispatch(getRecipeById(params.id));
    }, [dispatch, params]);

    return (
        <div className="profile-container">
            {recipe === null || loading ? (
                <div className="loader"></div>
            ) : (
                <div className="info-container">
                    <div className="profile-grid"></div>
                    <Link to="/recipes" className="btn btn-light">
                        Back
                    </Link>
                </div>
            )}
        </div>
    );
};

export default RecipeById;
