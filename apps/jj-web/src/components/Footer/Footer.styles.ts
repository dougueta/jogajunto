import styled from 'styled-components';
import theme from '../../theme';
export const FooterWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.palette.background.default};
  display: flex;
  height: 5em;
  box-shadow: 0px -3px 19px -4px
    ${(props) => props.theme.customColors.orange.main};
`;
export const Menu = styled.ul`
  justify-content: space-around;
  align-items: center;
  text-align: center;
  display: flex;
  width: 100%;

  @keyframes slideInUp {
    0% {
      transform: translateY(120%);
      visibility: visible;
    }
    100% {
      transform: translateY(0);
    }
  }

  p {
    // border: 1px solid green
  }

  .active {
    & li {
      position: relative;
      bottom: 30px;
    }

    &::before {
      content: '';
      background: ${(props) => props.theme.customColors.oldLace.main};
      color: ${(props) => props.theme.customColors.orange.main};
      position: absolute;
      top: 14%;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      box-shadow: 0px -3px 19px -4px
        ${(props) => props.theme.customColors.darkPastelred.main};
      // z-index: -1;
      margin: -36px;
      animation-name: slideInUp;
      animation-duration: 0.5s;
      animation-fill-mode: both;
    }

    & span {
      animation-name: slideInUp;
      animation-duration: 1s;
      animation-fill-mode: both;
      color: ${(props) => props.theme.customColors.orange.main};
    }
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.customColors.oldLace.main};
`;
