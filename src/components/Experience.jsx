import React from 'react';

const Experience = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Experience</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience items */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Job Title</h2>
          <p className="text-gray-700">Company Name</p>
          <p className="text-gray-500">Date Range</p>
          <p className="mt-4">Description of the job experience goes here.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Job Title</h2>
          <p className="text-gray-700">Company Name</p>
          <p className="text-gray-500">Date Range</p>
          <p className="mt-4">Description of the job experience goes here.</p>
        </div>
        {/* Add more experience items as needed */}
      </div>
    </div>
  );
};

export default Experience;
