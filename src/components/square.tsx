import React from "react";

interface SquareProps {
  onClick: () => void;
  value: string | null;
}

const Square: React.FC<SquareProps> = ({ onClick, value }) => {
  return (
    <button
      className="w-20 h-20 text-3xl font-bold flex items-center justify-center 
                 border border-gray-600 bg-gray-800 text-white 
                 hover:bg-gray-700 transition-all"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
