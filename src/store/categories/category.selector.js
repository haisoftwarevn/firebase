import { createSelector } from "reselect";

// const selectCategoryReducer = (state) => {
//   console.log(state.categories, "1111111111111111");
//   return state.categories;
// };

// export const selectCategories = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => {
//     console.log(categoriesSlice, "222222222222222");
//     return categoriesSlice.categories;
//   }
// );

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoryReducer) => categoryReducer.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items; // thuộc tính được gán với mảng obj
      return acc;
    }, {});
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
