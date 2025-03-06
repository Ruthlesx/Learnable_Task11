'use client';
import React, { useState } from 'react';
import JobList from './components/JobList';

const JobPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
      <JobList />
    </div>
  );
};

export default JobPage;


