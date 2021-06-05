import styled from 'styled-components';

export const ComponentHistoric = styled.div`
  padding: 1.5% 2% 2% 2%;
  background: #f0f0f0;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
  overflow-y: auto;

  height: 88vh;
  width: 99%;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  }
  @media (max-width: 769px) {
    .container {
      justify-items: center;
    }
  }
  @media (min-height: 1350px) {
    min-height: 93vh;
  }
`;
