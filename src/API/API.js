import { API_URL } from "../config/config";

export const getMealBuId = async id => {
    const responce = await fetch(`${API_URL}lookup.php?i=${id}`);
    return await responce.json();
};

export const getAllCategories = async () => {
    const responce = await fetch(`${API_URL}categories.php`);
    return await responce.json();
};

export const getFilteredCategoriy = async name => {
    const responce = await fetch(`${API_URL}filter.php?c=${name}`);
    return await responce.json();
};