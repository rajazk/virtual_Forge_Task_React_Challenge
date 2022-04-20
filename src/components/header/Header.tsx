import React from "react";
import { StyledHeaderWrapper, StyledOrder } from "./HeaderStyles";
// State
import { ProductsContainer } from "../../state-containers/Products";

function Header() {
  const { amount, currentSelectedCartList } = ProductsContainer.useContainer();
  return (
    <StyledHeaderWrapper>
      <h3 className="logo">
        VF-APPAREL <span>CO</span>
      </h3>
      <StyledOrder>
        <h3>{`£${amount}`}</h3>
        <span>{currentSelectedCartList.length}</span>
      </StyledOrder>
    </StyledHeaderWrapper>
  );
}

export default Header;
