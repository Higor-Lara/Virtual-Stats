import styled from 'styled-components';

export const ComponentHistoricPatient = styled.div`
  width: 300px;
  height: 100px;
  margin-top: 9%;
  background: #0b74bc;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
  border-radius: 3px;

  .horas {
    font: 400 15px Roboto, sans-serif;
    margin-bottom: 5px;
  }
  p {
    font: 400 14px Roboto, sans-serif;
  }

  .dates {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;

      p:last-child {
        margin-left: 5px;
      }
    }
    div:first-child {
      margin-left: -5px;
    }
    div:last-child {
      margin-top: 5px;

      p:last-child {
        white-space: nowrap;
        width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .trash {
    margin-left: 15px;
  }
  @media (max-width: 769px) {
    width: 250px;
  }
`;
