import React from "react";
import { StyledCartWrapper, StyledTotalWrapper } from "./CartListStyles";
// State
import { ProductsContainer } from "../../state-containers/Products";
//Types
import { ProductResponse } from "../../types/products";

function CartList() {
  const {
    currentSelectedCartList,
    amount,
    setAmount,
    setCurrentSelectedCartList,
  } = ProductsContainer.useContainer();

  const handleRemoveItem = (removeItem: ProductResponse) => {
    const data = [...currentSelectedCartList];
    let index = data.findIndex(
      (item: ProductResponse) => item.id === removeItem.id
    );
    if (index !== -1) {
      data.splice(index, 1);
      setCurrentSelectedCartList(data);
      setAmount(amount - +removeItem.variants[0].price);
    }
  };

  return (
    <StyledCartWrapper>
      <div className="heading">
        <h5>
          CART <span>{currentSelectedCartList.length}</span>
        </h5>
      </div>
      <div className="cartList">
        {currentSelectedCartList.length ? (
          currentSelectedCartList.map(
            (item: ProductResponse, index: number) => {
              return (
                <div className="cartItem" key={index}>
                  <div className="title">
                    <h5>{item.title}</h5>
                    <p>{`$ ${item.variants[0].price}`}</p>
                  </div>
                  <div className="des">
                    <p>{item.variants[0].title}</p>
                    <button onClick={() => handleRemoveItem(item)}>
                      REMOVE
                    </button>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <p>No item selected.</p>
        )}
        <StyledTotalWrapper>
          <div className="info">
            <h4>Total</h4>
            <p>Inc.£0 in taxes</p>
          </div>
          <h1 className="totalAmount">{`£${amount}`}</h1>
        </StyledTotalWrapper>
      </div>
    </StyledCartWrapper>
  );
}

export default CartList;
