import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import './index.css';
import './fonts/Montserrat-Regular.ttf';
import './fonts/Montserrat-Medium.ttf';
import './fonts/Montserrat-SemiBold.ttf';
//  <BrowserRouter basename={process.env.PUBLIC_URL}>
// <BrowserRouter basename="https://vadimvyalov.github.io/follower/">
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
