import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding-top: 20px;

  > img {
    margin-top: 15px;
    width: 250px;
  }

  > form {
    width: 31vw;
    height: 45vh;
    background-color: #0b74bc;
    border-radius: 5px;
    padding: 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .container-login p:first-child {
    font: 500 18px Roboto, sans-serif;
  }

  .text-rodape {
    padding: 0 20px;
    font: 400 14px Roboto, sans-serif;
    color: #0096c7;

    display: flex;
    flex-direction: row;

    p:first-child {
      color: #000;
      margin-right: 5px;
    }
    p:last-child {
      color: #000;
    }
  }

  .img-rodape img {
    height: 40px;
    margin-right: 3rem;
  }

  #rodape {
    width: 100vw;
    height: 10%;
    background: rgba(11, 116, 188, 0.2);

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  #remenber {
    display: none;

    & + label:before {
      content: '';
      background-color: #fff;
      display: inline-block;
      height: 13px;
      width: 13px;
      border-radius: 45%;
      margin-right: 5px;
      margin-top: 5px;
    }

    &:checked + label:before {
      background-color: #0b74bc;
      height: 7px;
      width: 7px;
      border: 3px solid #fff;
    }
  }

  label {
    margin-left: 5px;
    font: 400 16px Roboto, sans-serif;
  }

  button {
    width: 45%;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: #fff;
    color: #0b74bc;
    font: 700 16px Roboto, sans-serif;
    transition: 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #e6e6e6;
    }
  }
  @media (max-width: 769px) {
    form {
      width: 90vw;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  width: 78%;
  padding: 7px 10px;
  border: none;
  border-radius: 5px;
  background: #fff;

  input {
    border: none;
    font: 400 14px Roboto, sans-serif;
    margin-left: 5px;
    border-left: 1px solid #ccc;
    padding-left: 7px;
    width: 100%;
  }

  svg {
    height: 22px;
    width: 22px;
    color: #0096c7;
  }
`;
