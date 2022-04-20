import { useState } from "react";
import { createContainer } from "unstated-next";
//Types
import { ProductResponse } from "../types/products";

function useProducts() {
  const [amount, setAmount] = useState<number>(0);
  const [currentSelectedCartList, setCurrentSelectedCartList] = useState<
    ProductResponse[]
  >([]);

  return {
    currentSelectedCartList,
    setCurrentSelectedCartList,
    amount,
    setAmount,
  };
}

export const ProductsContainer = createContainer(useProducts);
