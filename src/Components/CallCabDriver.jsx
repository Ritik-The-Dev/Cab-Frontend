import React from 'react';

const CallCabDriver = () => {
  const handleCallNow = () => {
    const phoneNumber = '6395763977';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Cab is Booked Successfully
        </h1>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={handleCallNow}
        >
          Call Now
        </button>
      </div>
    </div>
  );
};

export default CallCabDriver;
