import React from 'react';
import { RotatingTriangles } from 'react-loader-spinner';

const Loading = ({ label, h = 80, w = 80 }) => {
  return (
    <div>
      <RotatingTriangles
        visible={true}
        height={h}
        width={w}
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
      {label && <p>{label}</p>}
    </div>
  );
};

export default Loading;
