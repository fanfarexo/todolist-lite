import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import AppContainer from './AppContainer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppContainer />
  </React.StrictMode>,
);
