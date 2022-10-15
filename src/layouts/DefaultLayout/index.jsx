import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <p>Default Layout</p>
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
