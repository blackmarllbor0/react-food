import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "react-helmet";

import { getFilteredCategoriy } from '../API/API';
import { fetchedCategory, searchFilteredCategory } from '../reducers/mainReducer';

import MealList from "../components/MealList";
import Serach from '../components/Search';

export default function Category() {
    const { name } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { category, filteredCategory } = useSelector(state => state.main);
    const { pathname, search } = useLocation();

    useEffect(() => {
        getFilteredCategoriy(name).then(data => {
            dispatch(fetchedCategory(data.meals));
            dispatch( searchFilteredCategory(search ?
                data.meals.filter(item => 
                    item.strMeal.toLowerCase().includes(search.split('=')[1].toLowerCase()
                )) : data.meals));
        })
    }, [name, dispatch]);

    const HandleSubmit = (str) => {
        if (str) {
            dispatch(searchFilteredCategory(
                filteredCategory.filter(item => item.strMeal.toLowerCase().includes(str.toLowerCase()))
            ));
            navigate({pathname, search: `?search=${str}`});
        } else {
            dispatch(searchFilteredCategory(category));
            navigate(`/category/${name}`);
        }
    };
    
    return (
        <>
            <Helmet>
                <title> Categoty {name} </title>
            </Helmet>
            <Serach method={HandleSubmit} />
            <button 
                className="btn deep-purple darken-2"
                onClick={() => navigate(-1)}
            > Go back </button>
            <MealList />
        </>
    );
}