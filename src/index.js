import React from "react";
import './index.css'

import reportWebVitals from './reportWebVitals'
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from "./STORE";


ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);

reportWebVitals();