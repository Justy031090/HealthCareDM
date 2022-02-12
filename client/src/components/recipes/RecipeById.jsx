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

    const {
        header,
        sybmols,
        img,
        serving_size,
        number_of_serves,
        preparation_time,
        cook_time,
        description,
        nutrions,
        preparations_steps,
        ingredients,
    } = recipe;

    useEffect(() => {
        dispatch(getRecipeById(params.id));
    }, [dispatch, params]);

    return (
        <div className="recipe-page-container">
            {recipe === null || loading ? (
                <div className="loader"></div>
            ) : (
                <div className="recipe-page-main">
                    <h2 className="large text-primary">{header}</h2>
                    <div className="recipe-page-top">
                        <img src={img} alt="" className="recipe-page-img" />
                        <div className="recipe-page-top-right">
                            <span className="recipe-page-description">
                                {description}
                            </span>
                            <div className="line"></div>
                            <div className="serves">
                                <i class="fas fa-utensils"></i>{' '}
                                <span>Serves {number_of_serves}</span>
                            </div>
                            <div className="prep">
                                <i className="fas fa-clock"></i>
                                <span>Prep {preparation_time} minutes</span>
                            </div>
                        </div>
                    </div>
                    <div className="recipe-page-center">
                        <span>Each {serving_size} serving contains :</span>
                        <div className="recipe-page-nutrions">
                            {nutrions.map((nutrient) => {
                                return (
                                    <div className="nutrient-box">
                                        {nutrient.kCal && (
                                            <span className="kCal-flex">
                                                {nutrient.kCal}
                                            </span>
                                        )}
                                        {nutrient.carbs && (
                                            <span className="carbs-flex">
                                                {nutrient.carbs}
                                            </span>
                                        )}
                                        {nutrient.fibre && (
                                            <span className="fibre-flex">
                                                {nutrient.fibre}
                                            </span>
                                        )}
                                        {nutrient.protein && (
                                            <span className="protein-flex">
                                                {nutrient.protein}
                                            </span>
                                        )}
                                        {nutrient.fat && (
                                            <span className="fat-flex">
                                                {nutrient.fat}
                                            </span>
                                        )}
                                        {nutrient.saturates && (
                                            <span className="saturates-flex">
                                                {nutrient.saturates}
                                            </span>
                                        )}
                                        {nutrient.sugars && (
                                            <span className="sugars-flex">
                                                {nutrient.sugars}
                                            </span>
                                        )}
                                        {nutrient.salt && (
                                            <span className="salt-flex">
                                                {nutrient.salt}
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <Link to="/recipes" className="btn btn-light">
                        More Recipies
                    </Link>
                </div>
            )}
        </div>
    );
};

export default RecipeById;
