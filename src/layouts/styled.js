import styled from 'styled-components';

export const Header = styled.div`
  background: #FFFFFF;
  height: 62px;
  position: fixed;
  width: 100%;
`;

export const Footer = styled.div`
  background: #F8F8F8;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 50px 20px 10px;
`;

export const AntDropdown = styled.div`
  float: right;
  margin-right: 28px;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;
  .dropdown > span {
    display: flex;
    align-items: center;
    height: 62px;
  }
  .dropdown-menu {
    text-align: right;
    padding-right: 14px;
  }
  .title {
    margin-right: 10px;
    h4 {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      text-align: right;
    }
    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #B9B9C3;
      text-align: right;
    }
  }
`;
