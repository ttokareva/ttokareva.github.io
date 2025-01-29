import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
