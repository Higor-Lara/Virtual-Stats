import styled from 'styled-components';

export const EditPatients = styled.div`
  height: 88vh;
  width: 99%;
  .patient-and-att {
    padding: 1.5% 2% 2% 2%;
    background: #f0f0f0;
    box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
  }
  .min-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10%;
  }
  .information-patient {
    width: 100%;
    padding: 12px 40px 25px 40px;
    background: #0b74bc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  .name-patient {
    display: flex;
    justify-content: center;
  }
  .datas-and-icon {
    margin-top: 18px;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .datas p {
    margin-top: 15px;
  }
  .new-edit {
    width: 100%;
    padding: 12px 20px 25px 30px;
    background: #0b74bc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  .text-and-icon-reload {
    font: 400 16px Roboto, sans-serif;

    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-and-icon-reload p:first-child {
    padding-right: 8px;
  }
  .button-edit-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 20px;

    button,
    a {
      width: 100%;
      max-width: 300px;
      height: 40px;
      background: #f9f9f9;
      border-radius: 8px;
      border: none;
    }
  }

  .dates-patient {
    width: 100%;
    height: 100%;
    margin-top: 25px;
    align-self: center;
    background: #fffdfd;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px -3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 25px 15px 30px;
  }

  .all-text-dates-patient {
    font: 500 16px Roboto, sans-serif;
    color: #000;
    margin-top: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .input-medication-and-food {
      width: 90%;
      height: 30px;
      padding-left: 5px;
      color: #6b7e87;

      background: #ffffff;
      border: 1px solid #cccccc;
      box-sizing: border-box;
      border-radius: 8px;
    }
    .input-medication-and-food-two {
      width: 90%;
      height: 30px;
      padding-left: 5px;
      color: #6b7e87;

      background: #ffffff;
      border: 1px solid #cccccc;
      box-sizing: border-box;
      border-radius: 8px;
    }
    .input-medication-and-food-tree {
      width: 90%;
      height: 30px;
      padding-left: 5px;
      color: #6b7e87;

      background: #ffffff;
      border: 1px solid #cccccc;
      box-sizing: border-box;
      border-radius: 8px;
    }
  }
  .all-text-dates-patient-two {
    font: 500 16px Roboto, sans-serif;
    color: #000;
    margin-top: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      margin-top: 5px;
    }
  }
  .edit-dates-input-label {
    display: flex;
    flex-direction: row;

    input {
      margin-top: 9px;
      padding-left: 7px;
      border: none;
      background: #0b74bc;
    }
  }
  .edit-dates-input-label-state {
    display: flex;
    flex-direction: row;

    input {
      width: 60%;
      margin-top: 9px;
      padding-left: 7px;
      border: none;
      background: #0b74bc;
    }
  }
  #textarea-patient {
    font: 400 16px Roboto, sans-serif;
    color: #6b7e87;
    width: 90%;
    margin-left: 10px;
    height: 6.2rem;
    padding-left: 7px;
    padding-top: 3px;

    background: #ffffff;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    border-radius: 8px;
  }
  textarea {
    resize: none;
  }
  @media (max-width: 769px) {
    .min-container {
      flex-direction: column;
      gap: 30px;
    }
    .all-text-dates-patient {
      flex-direction: column;
      gap: 10px;
      p {
        align-self: flex-start;
      }
    }
    .all-text-dates-patient-two {
      flex-direction: column;
      gap: 10px;
    }
  }
  @media (min-height: 768px) {
    .dates-patient {
      padding: 5% 2%;
    }
    .patient-and-att {
      min-height: 90vh;
      justify-content: space-between;
    }
  }
  @media (min-height: 870px) {
    .patient-and-att {
      min-height: 90vh;
      justify-content: space-between;
    }
    .dates-patient {
      min-height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 4% 2%;
    }
    .new-edit {
      min-height: 25vh;
    }
  }
`;
