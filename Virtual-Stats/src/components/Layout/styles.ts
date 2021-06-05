import styled from 'styled-components';

interface SidebarProps {
  $isOpen: boolean;
}

export const Container = styled.div<SidebarProps>`
  display: flex;

  #content {
    display: flex;
    flex: 1;
    flex-direction: column;

    .icon-list {
      padding-left: ${props => {
        if (props.$isOpen && window.innerWidth < 768) {
          return 260;
        }
        if (!props.$isOpen && window.innerWidth < 768) {
          return 0;
        }
        if (props.$isOpen) {
          return 260;
        }
        if (!props.$isOpen) {
          return 80;
        }
        return 80;
      }}px;
      padding-top: 15px;

      display: flex;
      flex-direction: row;
      align-items: center;
      transition: 0.2s;

      button {
        background: none;
        border: none;
        transition: 0.2s;
      }

      p {
        color: #0b74bc;
        font: 500 18px Roboto, sans-serif;
        margin-left: 10px;
        transition: 0.2s;
        white-space: nowrap;
        width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    #main {
      transition: 0.2s;
      margin-left: ${props => {
        if (props.$isOpen && window.innerWidth < 768) {
          return 0;
        }
        if (!props.$isOpen && window.innerWidth < 768) {
          return 0;
        }
        if (props.$isOpen) {
          return 260;
        }
        if (!props.$isOpen) {
          return 75;
        }
        return 80;
      }}px;
    }
  }
  @media (max-width: 769px) {
    .icon-list {
      p {
        display: ${props => (props.$isOpen ? 'none' : 'unset')};
      }
    }
  }
`;
