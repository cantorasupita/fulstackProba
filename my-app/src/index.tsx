import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//router v6
import { BrowserRouter } from "react-router-dom";
//redux
import {Provider} from 'react-redux'
//store
import { store} from './redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>,
  </React.StrictMode>
);

