import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Helmet from 'react-helmet';

import { getAllCategories } from '../API/API';
import { fetchedCatalogs,searchFilteredCatalog } from '../reducers/mainReducer';

import CategoryList from '../components/CategoryList';
import Serach from '../components/Search';

export default function HomePage() {
    const dispatch = useDispatch();
    const { filteredCatalog, catalog } = useSelector(state => state.main);
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    useEffect(() => {
        getAllCategories().then(data => {
            dispatch(fetchedCatalogs(data.categories));
            dispatch( searchFilteredCatalog( search ?
                data.categories.filter(item => 
                    item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()
                )) : data.categories
            ));
        });
    }, [dispatch, search]);
    
    const HandleSubmit = (str) => {
        if (str) {
            dispatch(searchFilteredCatalog(
                filteredCatalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
            ));
            navigate({pathname, search: `?search=${str}`});
        } else {
            dispatch(searchFilteredCatalog(catalog));
            navigate('/');
        }
    };
    
    return (
        <>
        <Helmet>
            <meta name='React Food project' content='React Food project' />
            <title>React Food</title>
        </Helmet>
            <Serach method={HandleSubmit} />
            <CategoryList />
        </>
    );
}