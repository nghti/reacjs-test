import styled from 'styled-components';

export const ContainerForm = styled.div`
  color: #5E5873;
  .content_left {
    height: 100vh;
    background: #F8F8F8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content_right {
    display: block;
    margin: auto;
    padding: 0 66px;
    h3 {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 10px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 24px;
    }
    .form-label {
      margin-bottom: 0;
    }
    .btn {
      background-color: #7367F0;
      width: 100%;
    }
  }
`;
