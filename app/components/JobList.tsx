import React from 'react';
import JobCard from './JobCard';
import jobs from '../data/jobs.json'

const JobList: React.FC = () => {
  return (
    <div className="grid gap-4">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p className="text-gray-500">No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;
