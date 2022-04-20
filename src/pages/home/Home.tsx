import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
// Components
import Header from "../../components/header/Header";
import CartList from "../../components/cartList/CartList";
import ProductCard from "../../components/productCard/ProductCard";
// Styles
import {
  Select,
  StyledBgImage,
  StyledproductListWrapper,
  StyledproductList,
} from "./HomeStyles";
import { StyledSpinner } from "../../components/spinner/SpinnerStyles";
//Types
import { ProductResponse } from "../../types/products";

function Home() {
  const [products, setProducts] = useState<ProductResponse[] | []>([]);
  const [order, setOrder] = useState<string>("aToz");
  const [sortedProducts, setSortedProducts] = useState<ProductResponse[] | []>(
    []
  );

  useEffect(() => {
    axios.get("https://efuktshirts.com/products.json").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  useEffect(() => {
    const data = [...products];
    const filterData = data.sort((a: any, b: any) => {
      switch (order) {
        case "lth":
          return Number(a.variants[0].price) - Number(b.variants[0].price);
        case "htl":
          return Number(b.variants[0].price) - Number(a.variants[0].price);
        case "aToz":
          return a.title.localeCompare(b.title);
        case "zToa":
          return b.title.localeCompare(a.title);
        default:
          return a.variants[0].price - b.variants[0].price;
      }
    });
    setSortedProducts(filterData);
  }, [products, order]);

  return (
    <Fragment>
      <Header />
      <StyledBgImage />
      {!sortedProducts.length ? (
        <StyledSpinner />
      ) : (
        <StyledproductListWrapper>
          <div className="productList">
            <div className="productWrapper">
              <Select value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="aToz">Title - A to Z</option>
                <option value="zToa">Title - Z to A</option>
                <option value="htl">Highest Price</option>
                <option value="lth">Lowest Price</option>
              </Select>
              <StyledproductList>
                {sortedProducts.map(
                  (product: ProductResponse, index: number) => {
                    return <ProductCard key={index} product={product} />;
                  }
                )}
              </StyledproductList>
            </div>
          </div>
          <CartList />
        </StyledproductListWrapper>
      )}
    </Fragment>
  );
}

export default Home;
