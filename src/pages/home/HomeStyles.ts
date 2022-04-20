import styled from "styled-components/macro";
import bgImage from "../../assets/images/bg.jpg";

export const StyledBgImage = styled.div`
  background-image: url(${bgImage});
  width: 100%;
  height: 300px;
  background-size: cover;
`;
export const Select = styled.select`
  width: 310px;
  height: 35px;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-bottom: 20px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const StyledproductListWrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  .productList {
    width: 75%;
    .productWrapper {
      h1 {
      }
    }
  }
`;

export const StyledproductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;
