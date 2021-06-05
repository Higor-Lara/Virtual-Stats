import styled from 'styled-components';
import { darken } from 'polished';

interface SidebarProps {
  $isOpen: boolean;
}

export const Sidebars = styled.aside<SidebarProps>`
  z-index: 100;
  position: fixed;
  min-height: 90vh;
  height: 100%;
  width: ${props => {
    if (!props.$isOpen && window.innerWidth < 768) {
      return 0;
    }
    if (props.$isOpen) {
      return 250;
    }
    if (!props.$isOpen) {
      return 75;
    }
    return 80;
  }}px;
  padding: ${props => (props.$isOpen ? 5 : 15)}px 0 22px 0;
  display: ${props =>
    !props.$isOpen && window.innerWidth < 769 ? 'none' : 'unset'};
  background: #0b74bc;
  transition: width 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > img {
    max-width: 180px;
    margin-right: 5px;
    display: ${props =>
      !props.$isOpen && window.innerWidth < 768 ? 'none' : 'unset'};

    width: ${props => (props.$isOpen ? 'auto' : '50px')};
  }

  .perfil {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      width: ${props => (props.$isOpen ? 90 : 30)}px;
      height: ${props => (props.$isOpen ? 90 : 30)}px;
      margin-top: 20px;
      display: ${props =>
        !props.$isOpen && window.innerWidth < 768 ? 'none' : 'unset'};
    }

    p {
      display: ${props => (props.$isOpen ? 'unset' : 'none')};
      margin-top: 5px;
    }
  }

  .list {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    .barra {
      width: 100%;
      height: 1px;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 28%,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 1) 72%,
        rgba(255, 255, 255, 0) 100%
      );
      margin-top: 12px;
    }

    .barra-two {
      width: 100%;
      height: 1px;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 28%,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 1) 72%,
        rgba(255, 255, 255, 0) 100%
      );
      margin-top: auto;
    }
  }

  .patients {
    margin-top: 30px;
    padding: 0 10px;

    a {
      text-decoration: none;
      justify-content: ${props => (props.$isOpen ? 'unset' : 'center')};
    }
  }

  button,
  a {
    display: flex;
    align-items: center;
    flex-direction: row;
    background: none;
    border: 0;
    color: #fff;
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    transition: 0.2s;

    &:defined {
      outline: none;
    }

    svg {
      height: 30px;
      width: 30px;
    }

    span {
      display: ${props => (props.$isOpen ? 'unset' : 'none')};
      margin-left: 10px;
    }

    &:hover {
      background: ${darken('0.06'   , '#0b74bc')};
    }
  }
  .item {
    padding: 0 10px;
    width: 100%;
  }

  .out {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
