import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catalog: [],
    category: [],
    recipe: {},
    filteredCatalog: [],
    filteredCategory: []
};

const main = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        fetchedCatalogs: (state, action) => {
            state.catalog = action.payload;
        },
        fetchedCategory: (state, action) => {
            state.category = action.payload;
        },
        fetchedRecipe: (state, action) => {
            state.recipe = action.payload;
        },
        searchFilteredCatalog: (state, action) => {
            state.filteredCatalog = action.payload;
        },
        searchFilteredCategory: (state, action) => {
            state.filteredCategory = action.payload;
        }
    }
});

const { actions, reducer } = main;

export const  {
    fetchedCatalogs,
    fetchedCategory,
    fetchedRecipe,
    searchFood,
    searchFilteredCatalog,
    searchFilteredCategory
} = actions;
export default reducer;