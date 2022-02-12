import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
    const navigate = useNavigate();
    const { preparation_time, cook_time, sybmols, nutrions, _id } = recipe;
    let totalPrepTime = preparation_time + cook_time;
    return (
        <div className="grid-item">
            <img
                src={recipe.img}
                alt=""
                onClick={() => navigate(`/recipes/${_id}`)}
                className="recipe-image"
            />
            <div className="top">
                <Link to={`/recipes/${_id}`} className="recipe-link">
                    {recipe.header}
                </Link>
            </div>
            <div className="line-recipe"></div>
            <div className="prep-symbol">
                <div className="prep-left">
                    <i className="fas fa-clock"></i>
                    <span>{totalPrepTime} minutes</span>
                </div>
                <div className="prep-right">
                    {sybmols.map((symbol) => {
                        return <img src={symbol} alt=""></img>;
                    })}
                </div>
            </div>
            <div className="nutrions-container">
                <div className="kcal">
                    kCal <br />
                    {nutrions[0].kCal}
                </div>
                <div className="carbs">
                    Carbs <br />
                    {nutrions[1].carbs}
                </div>
                <div className="carbs">
                    Sugars <br />
                    {nutrions[6].sugars}
                </div>
            </div>
        </div>
    );
};

export default RecipeItem;
