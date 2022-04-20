import styled from "styled-components/macro";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 20px auto;
  .logo {
    border: 2px solid #9479ff;
    padding: 5px;
    font-weight: 500px;
    span {
      vertical-align: super;
      font-size: 14px;
    }
  }
`;

export const StyledOrder = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  h3 {
    font-weight: 500;
  }
  span {
    width: 40px;
    height: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #9479ff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
