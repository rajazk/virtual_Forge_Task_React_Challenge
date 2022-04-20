import styled from "styled-components/macro";

export const StyledCartWrapper = styled.div`
  width: 25%;
  box-shadow: rgb(0 0 0 / 25%) 0px 0.0625em 0.0625em,
    rgb(0 0 0 / 25%) 0px 0.125em 0.5em,
    rgb(255 255 255 / 10%) 0px 0px 0px 1px inset;
  padding: 20px;
  border-top: 6px solid #9479ff;
  .heading {
    margin-bottom: 20px;
    h5 {
      font-size: 20px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 10px;
      span {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        line-height: 28px;
        background-color: #9479ff;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .cartList {
    .cartItem:first-child {
      border-top: 1px solid gainsboro;
    }
    .cartItem {
      border-bottom: 1px solid gainsboro;
      padding: 20px 0px;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        p {
          font-weight: 500;
        }
      }
      .des {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-size: 16px;
          color: #7175ff;
        }
        button {
          background-color: #e6e4e7;
          border: none;
          color: black;
          padding: 10px 8px;
          text-align: center;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
`;

export const StyledTotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  background-color: #e6e4e7;
  padding: 20px;
`;
