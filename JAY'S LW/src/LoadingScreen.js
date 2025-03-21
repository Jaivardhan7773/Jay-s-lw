import React from 'react';

const LoadingScreen = ({ statusMessage }) => {
  return (
    <div className="loading-screen d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="spinner-border text-primary mb-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="text-center text-muted">
        {statusMessage}
      </div>
    </div>
  );
};

export default LoadingScreen;
