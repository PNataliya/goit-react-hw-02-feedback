import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'components/theme';
import './index.css';

// const theme = {
//   colors: { text: 'black', accent: 'tomato' },
// };
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
