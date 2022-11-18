import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCategoriesStart } from "../../store/categories/category.action";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component.jsx";

//import { getCategoriesAndCollections } from "../../utils/firebase/firebase.utils";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
    // const getCategoriesMap = async () => {
    //   const categoriesArray = await getCategoriesAndCollections("categories");
    //   console.log(categoriesArray);
    //   dispatch(setCategories(categoriesArray));
    // };
    // getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
