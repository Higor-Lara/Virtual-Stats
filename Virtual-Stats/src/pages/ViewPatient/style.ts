import styled from 'styled-components';

export const InfoPatient = styled.div`
  .patient-and-att {
    height: 88vh;
    width: 99%;
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
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .datas p {
    padding-top: 15px;
  }
  .new-edit {
    width: 100%;
    padding: 12px 20px 25px 20px;
    background: #0b74bc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  .text-and-icon-reload {
    font: 400 16px Roboto, sans-serif;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .button-edit-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    gap: 30px;
    margin-bottom: 10px;
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
    min-height: 40vh;
    height: 100%;
    margin-top: 25px;
    padding-bottom: 10px;
    align-self: center;
    background: #fffdfd;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px -3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  .all-text-dates-patient {
    display: flex;
    flex-direction: row;
    font: 500 16px Roboto, sans-serif;
    color: #000;
    padding-left: 30px;
    margin-top: 20px;
    padding-right: 50px;
    p:last-child {
      color: #6b7e87;
      margin-left: 7px;
    }
  }
  .p-nome {
    width: 90%;
    margin-right: 20px;
    display: flex;
    justify-content: center;
  }
  .logo-edit {
    margin-right: -42px;
  }
  .button-copiar {
    margin-top: 28px;
    margin-left: 3%;
    height: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;

    background: none;
    border: none;

    svg {
      color: #0b74bc;
    }

    p {
      margin-top: 2px;
      margin-left: 4px;
      font: 500 16px Roboto, sans-serif;
    }
  }
  @media (max-width: 769px) {
    .patient-and-att {
      height: 98%;
    }
    .min-container {
      flex-direction: column;
      gap: 5vh;
    }
    .all-text-dates-patient {
      flex-direction: column;
      gap: 10px;
    }
  }

  @media (min-height: 1150px) {
    .patient-and-att {
      min-height: 93vh;
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
  @media (min-height: 1350px) {
    .patient-and-att {
      height: 98%;
      justify-content: space-between;
    }
    .dates-patient {
      min-height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 4% 0;
    }
    .new-edit {
      min-height: 25vh;
    }
  }
`;
