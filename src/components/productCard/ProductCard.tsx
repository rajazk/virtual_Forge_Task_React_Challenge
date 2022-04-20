import {
  Styledproduct,
  StyledproductBody,
  StyledButtonWrapper,
} from "./ProductCardStyles";
// State
import { ProductsContainer } from "../../state-containers/Products";
//Types
import { ProductResponse } from "../../types/products";

interface Props {
  product: ProductResponse;
}

function ProductCard({ product }: Props) {
  const {
    amount,
    setAmount,
    currentSelectedCartList,
    setCurrentSelectedCartList,
  } = ProductsContainer.useContainer();

  const handleAddCart = () => {
    setCurrentSelectedCartList([...currentSelectedCartList, product]);
    setAmount(amount + +product.variants[0].price);
  };

  return (
    <Styledproduct>
      <div className="productImage">
        <img src={product.images[0].src} alt="" />
      </div>

      <StyledproductBody>
        <div className="title">
          <h5>{product.title}</h5>
          <p>{`£${product.variants[0].price}`}</p>
        </div>
        <StyledButtonWrapper>
          <button className="addCard" onClick={handleAddCart}>
            Add to Card
          </button>
          <button className="viewCard">Quick View</button>
        </StyledButtonWrapper>
      </StyledproductBody>
    </Styledproduct>
  );
}

export default ProductCard;
