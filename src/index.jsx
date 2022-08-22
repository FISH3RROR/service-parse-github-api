import React from 'react';
import './index.less'
import App from './components/App';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './reducers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
