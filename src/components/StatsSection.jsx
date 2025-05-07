import React from 'react';
import StatCard from './StatCard';

const StatsSection = () => {
  return (
  
    <div className="max-w-4xl mx-auto flex  gap-8 mt-4">
    <StatCard value={15} suffix="K" label="SUBSCRIBERS" />
    <StatCard value={857} suffix="+" label="PROJECTS" />
    <StatCard value={205} suffix="" label="AWARDS" />
  </div>
   
  );
};

export default StatsSection;
