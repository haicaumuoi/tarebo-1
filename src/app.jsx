import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';

import { getAppRoutes } from './utils';

function App() {
  const location = useLocation();
  const APPRoutes = getAppRoutes();

  return (
    <AnimatePresence exitBeforeEnter>
      <APPRoutes location={location} key={location.pathname} />
    </AnimatePresence>
  );
}

export default App;
