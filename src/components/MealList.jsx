import { useSelector } from "react-redux";
import { Preloader } from "./Preloader";

import Meal from "./Meal";

export default function MealList() {
    const { filteredCategory = [] } = useSelector(state => state.main);

    return (
        <div className="list">
            {
                !filteredCategory.length ? <Preloader /> :
                    filteredCategory.map(item => <Meal key={item.idMeal} {...item} />)
            }
        </div>
    );
}