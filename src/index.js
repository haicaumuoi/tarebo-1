import '../node_modules/normalize.css/normalize.css';

import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '~/app/store';
import App from './app';
import './app/i18n';
import { Loading, Toast } from './components';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Suspense fallback={<Loading />}>
            {/* <Toast /> */}
            <Toast />
            <App />
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
