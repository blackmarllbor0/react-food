import { useSelector } from "react-redux";

import { Preloader } from './Preloader';
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
    const { filteredCatalog } = useSelector(state => state.main);

    return (
        <div className="list">
            {
                !filteredCatalog.length ? <Preloader /> : 
                filteredCatalog.map(item => <CategoryItem key={item.idCategory} {...item} />)
            }
        </div>
    );
}