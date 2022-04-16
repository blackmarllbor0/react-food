import { Link } from "react-router-dom";

export default function Meal({ strMeal, idMeal, strMealThumb }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title"> {strMeal} </span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn deep-purple darken-1">
                    Watch reciepe
                </Link>
            </div>
        </div>
    );
}