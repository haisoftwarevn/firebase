import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import ProductCart from "../../components/product-card/product-card.component";
import "./category.styles.scss";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  //const products = categoriesMap[category];

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => {
              return <ProductCart key={product.id} product={product} />;
            })}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
