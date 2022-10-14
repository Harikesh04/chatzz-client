import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './Contexts/chatContext';
import { Provider as UserProvider } from './Contexts/userContext';

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <UserProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </UserProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
