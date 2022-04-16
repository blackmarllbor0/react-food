import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet'

import { getMealBuId } from '../API/API';
import { fetchedRecipe } from '../reducers/mainReducer';
import { Preloader } from '../components/Preloader';

export default function Recipe() {
    const { id } = useParams();
    const { recipe } = useSelector(state => state.main);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        getMealBuId(id).then(data => dispatch(fetchedRecipe(data.meals[0])));
    }, [dispatch, id]);
    return (
        <>
            <Helmet>
                <title>{ recipe.strMeal }</title>
            </Helmet>
            {
                !recipe.idMeal ? <Preloader /> : (
                    <div className="recipe">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <h1> {recipe.strMeal} </h1>
                        <h6> Category: {recipe.strCategory} </h6>
                        {
                            recipe.strArea ? <h6> Area: {recipe.strArea} </h6> : null
                        }
                        <p> {recipe.strInstructions} </p>

                        <table className="centered">
                            <thead>
                                <tr> <th> Ingridient </th> <th> Measure </th> </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(recipe).map(key => {
                                        if(key.includes('strIngredient') && recipe[key]) {
                                            return (
                                                <tr key={key}>
                                                    <td>{ recipe[key] }</td>
                                                    <td>
                                                        {
                                                            recipe[`strMeasure${key.slice(13)}`]
                                                        }
                                                    </td>
                                                </tr>
                                            );
                                        }
                                        return null;
                                    })
                                }
                            </tbody>
                        </table>

                        {
                            recipe.strYoutube ? (
                                <div className="row">
                                    <h5 style={{margin: '2rem 0 1.5rem'}}> Video recipe  </h5>
                                    <iframe 
                                        src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} 
                                        title={recipe.idMeal}  
                                        allowfullscreen
                                    />
                                </div>
                            ) : null
                        }
                    </div>
                )
            }
            <button 
                className="btn deep-purple darken-1"
                onClick={() => navigate(-1)}
            > Go back </button>
        </>
    );
}