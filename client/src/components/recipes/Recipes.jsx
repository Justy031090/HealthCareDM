import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipeItem from './RecipeItem';
import { getRecipes } from '../../actions/recipesActions';
import './recipe.css';

const Home = () => {
    const dispatch = useDispatch();

    const recipeState = useSelector((state) => state.recipes);
    const { loading, recipes } = recipeState;

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);
    return (
        <section className="recipes">
            <div className="recipes-inner">
                <h2 className="large text-primary recipes-header">
                    Inspirational Recipes For Health Eaters
                </h2>
                {loading ? (
                    <div className="loader"></div>
                ) : (
                    <div className="grid-container">
                        {recipes?.map((recipe) => {
                            return (
                                <div key={recipe._id} className="wrapper">
                                    <RecipeItem recipe={recipe} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Home;
