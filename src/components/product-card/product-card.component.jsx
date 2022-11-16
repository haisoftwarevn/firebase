import { useContext } from "react";
import "./product-card.styles.scss";
import Button, { BUTTON_STYLE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_STYLE_CLASSES.inverted}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
