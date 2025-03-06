import React, { useState } from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  details: string;
}

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-gray-700">{job.company} - {job.location}</p>
      <p className="text-gray-600 font-semibold pb-4">Salary: {job.salary}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 min-w-[140px] rounded flex items-center justify-center gap-2 whitespace-nowrap hover:bg-blue-600 transition-all" 
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && <p className="mt-2 text-gray-500 whitespace-pre-line">{job.details}</p>}
    </div>
  );
};

export default JobCard;