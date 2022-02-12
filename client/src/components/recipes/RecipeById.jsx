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
    console.log(sybmols, cook_time, preparations_steps, ingredients);

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
                            <div className="description">
                                <span className="recipe-page-description">
                                    {description}
                                </span>
                            </div>
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
                        <span className="serving-size">
                            Each {serving_size} serving contains :
                        </span>
                        <div className="recipe-page-nutrions">
                            {nutrions.map((nutrient) => {
                                return (
                                    <div className="nutrient-box">
                                        {nutrient.kCal && (
                                            <span className="kCal-flex">
                                                kCal:
                                                <br /> {nutrient.kCal}
                                            </span>
                                        )}
                                        {nutrient.carbs && (
                                            <span className="carbs-flex">
                                                Carbs: <br />
                                                {nutrient.carbs}
                                            </span>
                                        )}
                                        {nutrient.fibre && (
                                            <span className="fibre-flex">
                                                Fibre:
                                                <br /> {nutrient.fibre}
                                            </span>
                                        )}
                                        {nutrient.protein && (
                                            <span className="protein-flex">
                                                Protein:
                                                <br /> {nutrient.protein}
                                            </span>
                                        )}
                                        {nutrient.fat && (
                                            <span className="fat-flex">
                                                Fat: <br />
                                                {nutrient.fat}
                                            </span>
                                        )}
                                        {nutrient.saturates && (
                                            <span className="saturates-flex">
                                                Saturates:
                                                <br /> {nutrient.saturates}
                                            </span>
                                        )}
                                        {nutrient.sugars && (
                                            <span className="sugars-flex">
                                                Sugars:
                                                <br /> {nutrient.sugars}
                                            </span>
                                        )}
                                        {nutrient.salt && (
                                            <span className="salt-flex">
                                                Salt: <br />
                                                {nutrient.salt}
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="recipe-page-bottom">
                        <div className="recipe-page-ingredients">
                            <h2 className="ingredients-header">Ingredients</h2>
                            {ingredients.map((ingredient, index) => {
                                return (
                                    <>
                                        <div
                                            key={index}
                                            className="ingredient-box"
                                        >
                                            {ingredient}
                                        </div>
                                        <div className="line"></div>
                                    </>
                                );
                            })}
                        </div>
                        <div className="recipe-page-methods">
                            {preparations_steps.map((step, index) => {
                                return (
                                    <div key={index} className="methods">
                                        <span className="step-number">
                                            Step {index + 1}
                                        </span>
                                        <br />
                                        <p>{step}</p>
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
