import styled from 'styled-components';

export const FormPatients = styled.div`
  color: #0b74bc;
  font: 500 16px Roboto, sans-serif;
  height: 100%;
  width: 99%;
  .form-patient {
    height: 88vh;
    padding: 1.5% 2% 2% 2%;
    background: #f0f0f0;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
  }
  .double-container {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5%;
  }
  .double-container-down {
    height: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5%;
  }
  .informations {
    width: 100%;
    padding: 25px 20px;
    background: #ffffff;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    .name {
      display: flex;
      flex-direction: row;
      align-items: center;

      input {
        height: 35px;
        width: 100%;
        font: 500 15px Roboto, sans-serif;
        margin-left: 57px;
        padding-left: 8px;

        background: #ffffff;
        border: 1px solid #cccccc;
        box-sizing: border-box;
        border-radius: 8px;
      }
    }
    .born {
      display: flex;
      flex-direction: row;
      align-items: center;

      input {
        height: 35px;
        width: 150px;
        font: 500 15px Roboto, sans-serif;
        margin-left: 13px;
        padding-left: 8px;

        background: #ffffff;
        border: 1px solid #cccccc;
        box-sizing: border-box;
        border-radius: 8px;
      }
    }
  }
  .icon-informations {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      margin-left: 10px;
    }
  }
  .mini-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding-top: 22px;
  }
  .mini-container-two {
    padding-top: 22px;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .mini-container-four {
    padding-top: 22px;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10% 0;
  }
  .identification {
    width: 100%;
    padding: 25px 20px;
    background: #ffffff;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    .cod-rg {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding-top: 22px;

      .cod {
        display: flex;
        flex-direction: row;
        align-items: center;

        input {
          height: 35px;
          width: 100%;
          font: 500 15px Roboto, sans-serif;
          margin-left: 56px;
          padding-left: 8px;

          background: #ffffff;
          border: 1px solid #cccccc;
          box-sizing: border-box;
          border-radius: 8px;
        }
      }
      .rg {
        display: flex;
        flex-direction: row;
        align-items: center;

        input {
          height: 35px;
          width: 150px;
          font: 500 15px Roboto, sans-serif;
          margin-left: 87px;
          padding-left: 8px;

          background: #ffffff;
          border: 1px solid #cccccc;
          box-sizing: border-box;
          border-radius: 8px;
        }
      }
      .leito {
        display: flex;
        flex-direction: row;
        align-items: center;

        input {
          height: 35px;
          width: 150px;
          font: 500 15px Roboto, sans-serif;
          margin-left: 72px;
          padding-left: 8px;

          background: #ffffff;
          border: 1px solid #cccccc;
          box-sizing: border-box;
          border-radius: 8px;
        }
      }
      .hospital {
        display: flex;
        flex-direction: row;
        align-items: center;

        p:last-child {
          font: 500 16px Roboto, sans-serif;
          margin-left: 42px;
          padding-left: 8px;
        }
      }
    }
  }
  .comunication {
    width: 100%;
    padding: 25px 20px;
    background: #ffffff;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    .phone {
      display: flex;
      flex-direction: row;
      align-items: center;

      input {
        height: 35px;
        width: 35%;
        font: 500 15px Roboto, sans-serif;
        margin-left: 35px;
        padding-left: 8px;

        background: #ffffff;
        border: 1px solid #cccccc;
        box-sizing: border-box;
        border-radius: 8px;
      }
    }

    .email {
      display: flex;
      flex-direction: row;
      align-items: center;

      input {
        height: 35px;
        width: 60%;
        font: 500 15px Roboto, sans-serif;
        margin-left: 57px;
        padding-left: 8px;

        background: #ffffff;
        border: 1px solid #cccccc;
        box-sizing: border-box;
        border-radius: 8px;

        &::placeholder {
          color: #ccc;
        }
      }
    }
  }
  .cancel-save {
    background: #0b74bc;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
    padding: 25px 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    gap: 40px;
    button,
    a {
      width: 100%;
      max-width: 300px;
      height: 40px;
      background: #f9f9f9;
      border-radius: 8px;
      border: none;
      &:hover {
        background-color: #e6e6e6;
      }
    }
  }

  @media (max-width: 769px) {
    .form-patient {
      height: 100%;
    }
    .double-container {
      flex-direction: column;
      column-gap: 5%;
    }
    .double-container-down {
      flex-direction: column;
    }
    .identification {
      margin-top: 30px;
    }
    .cancel-save {
      margin-top: 30px;
    }
  }
  @media (min-height: 1350px) {
    .form-patient {
      min-height: 93vh;
    }
  }
  @media (min-height: 980px) {
    .cancel-save {
      gap: 90px;
      button,
      a {
        height: 50px;
        max-width: 500px;
      }
    }
  }
`;
