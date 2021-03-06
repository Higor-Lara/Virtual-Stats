import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import GlobalStyle from './style/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
