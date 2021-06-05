import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLinks = styled(Link)`
  color: inherit;
  text-decoration: inherit;

  width: 180px;
  height: 50px;
  border: none;
  background: #0b74bc;
  border-radius: 13px;
  font: 400 17px Roboto, sans-serif;
  color: #fff;

  display: flex;
  align-items: center;
  padding-left: 8px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: inherit;
  }
  &:defined {
    outline: none;
  }
`;

export const ListPatients = styled.div`
  .patients-button {
    height: 88vh;
    width: 99%;
    padding: 1.5% 2% 2% 2%;
    background: #f0f0f0;
    overflow-y: auto;

    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: space-between;

    #searchbar {
      display: flex;
      align-items: center;
      background: #e6e6e6;
      padding: 8px 16px;
      border-radius: 30px;
      width: 200px;
      border: 1px solid #adadad;

      > button,
      > input {
        background: none;
        border: none;
      }

      > button {
        padding-right: 8px;
        border-right: 1px solid #adadad;
      }

      > input {
        margin-left: 8px;
        margin-bottom: 1px;
        width: 100%;
      }
    }
  }

  .patients {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
  .patients-button button:defined {
    outline: none;
  }
  .mais {
    margin-right: 7px;
  }
  @media (max-width: 769px) {
    .controls {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;

      #searchbar {
        width: 100%;
      }
    }
    .patients {
      justify-items: center;
    }
    ${StyledLinks} {
      width: 100%;
    }
  }

  @media (min-height: 1350px) {
    .patients-button {
      height: 93vh;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: inherit;
  }
`;
