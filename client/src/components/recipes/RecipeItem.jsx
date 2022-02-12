import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
    return (
        <div className="grid-item">
            <div className="top">
                <img src={recipe.img} alt="" />
                <h2>{recipe.header}</h2>
            </div>

            <p>{recipe.summary}</p>

            <div className="bottom">
                <Link to={`/recipes/${recipe._id}`} className="btn btn-primary">
                    Get Recipe
                </Link>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default RecipeItem;
