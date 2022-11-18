import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategoriesAndCollections } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component.jsx";

import "./shop.styles.scss";

const Shop = () => {
  const dispath = useDispatch();
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoriesArray = await getCategoriesAndCollections();

      dispath(setCategories(categoriesArray));
    };

    getCategoryMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
