import styled from 'styled-components';

export const SinglePatients = styled.div`
  width: 230px;
  height: 100px;
  margin-top: 9%;
  background: #0b74bc;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
  border-radius: 3px;

  p {
    font: 400 14px Roboto, sans-serif;
    padding-right: 15px;
  }
  p:first-child {
    font: 400 17px Roboto, sans-serif;
    padding-bottom: 10px;

    white-space: nowrap;
    width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p:last-child {
    margin-top: 3px;
  }
`;
