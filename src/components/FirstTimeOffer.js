import React from 'react';

export default function FirstTimeOffer() {
  return (
    <div className="bg-blue-100 text-center p-8 my-8">
      <h2 className="text-3xl font-bold text-blue-800">Welcome! Get 15% Off Your First Order</h2>
      <p className="text-blue-600 mt-2">Use the code below at checkout.</p>
      <div className="inline-block bg-blue-600 text-white font-bold tracking-widest px-6 py-2 mt-4 rounded-full">
        WELCOME15
      </div>
    </div>
  );
}