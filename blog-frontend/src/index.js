import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootNode = document.getElementById('root');

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
