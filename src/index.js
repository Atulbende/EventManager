import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import {store} from './redux/store'
import Index from './components/Index'
import './components/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
        <BrowserRouter><Index/></BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
