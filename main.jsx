import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './redux/Store'; // Make sure the path is correct
import { Provider } from 'react-redux'; // Import the Provider from react-redux
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </StrictMode>
  </BrowserRouter>
);
