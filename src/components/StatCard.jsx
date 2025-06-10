import React, { useEffect, useState } from 'react';

const StatCard = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16); // approx 60fps

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className=" px-4">
      <h2 className="text-3xl text-Main-color font-bold">
        {count}
        {suffix}
      </h2>
      <p className="text-sm font-bold text-gray-700 mt-1">{label}</p>
    </div>
  );
};

export default StatCard;