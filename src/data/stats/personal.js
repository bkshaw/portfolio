import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1994-12-12T04:20:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'experience',
    label: 'Work Experience',
    value: '4+ years',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Kolkata',
    link: 'https://www.google.com/maps/d/u/1/embed?mid=1WxVK-CTuRklZWF-E3yZ6EAfn2nxJwZ0&ehbc=2E312F',
  },
  {
    key: 'languages',
    label: 'Languages Known',
    value: 5,
  },
  {
    key: 'skills',
    label: 'Technical Skills',
    value: '40+',
  },
  {
    key: 'education',
    label: 'Degrees',
    value: 4,
  },
  {
    key: 'courses',
    label: 'Courses Completed',
    value: '20+',
  },
  {
    key: 'certifications',
    label: 'AI/ML Specializations',
    value: '5+',
  },
  {
    key: 'projects',
    label: 'Major Projects',
    value: '10+',
  },
  {
    key: 'companies',
    label: 'Companies Worked With',
    value: 3,
  },
];

export default data;
