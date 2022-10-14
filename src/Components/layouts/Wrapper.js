import React from 'react';
export default function Wrapper({ children, className }) {
  return (
    <div
      className={`w-full h-screen bg-gray-800 flex justify-center items-center`}
    >
      <div
        className={` h-full w-full md:w-6/12 lg:w-3/12 m-auto overflow-x-hidden scrollbar-hide ${className} `}
      >
        {children}
      </div>
    </div>
  );
}
