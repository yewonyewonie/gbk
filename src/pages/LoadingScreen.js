import React from 'react';
import './LoadingScreen.scss';

// eslint-disable-next-line react/prop-types
const LoadingScreen = ({ loadingComplete }) => {
  return (
    <div className={`LoadingScreen ${loadingComplete ? 'loaded' : ''}`}>
      <div className='loadContent'>초롱에 불 붙이는 중...</div>
    </div>
  );
};

export default LoadingScreen;