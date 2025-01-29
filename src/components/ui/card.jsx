import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`p-4 bg-gray-800 rounded-2xl ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="p-2">{children}</div>;
};
