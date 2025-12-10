import React from 'react';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white border border-teal-500 py-4 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
        <div className="flex items-center">
          <span className="text-lg font-semibold">5.0</span>
          <div className="flex ml-1">
            ★★★★★
          </div>
        </div>
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">7 Google Reviews</span>
        <img
          src="/wp-content/uploads/2025/08/Gas-Safe-Logo-2.png"
          alt="Gas Safe Logo"
          className="h-8 w-auto"
        />
      </div>
    </div>
  );
};

export default TrustBar;