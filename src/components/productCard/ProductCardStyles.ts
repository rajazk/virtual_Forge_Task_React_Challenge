import styled from "styled-components/macro";

export const Styledproduct = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  padding: 20px;
  width: 254px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .productImage {
    padding: 20px;
    background-color: #f2f2f2;
    img {
      width: 100%;
    }
  }
`;

export const StyledproductBody = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
    h5 {
      font-size: 20px;
      font-weight: 500;
    }
    p {
      font-weight: 500;
      white-space: nowrap;
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  button {
    border: none;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    flex: 1;
  }
  .addCard {
    background-color: #9479ff;
    color: white;
  }
  .viewCard {
    background-color: #e6e4e7;
  }
`;
