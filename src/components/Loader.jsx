import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50  bg-transparent backdrop-blur-sm">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default LoadingSpinner;