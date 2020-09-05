import React from 'react';

interface countryProps {
  area: number;
  flagURL: string;
  name: string;
}

export const CountryCard: React.FC<countryProps> = ({
  area,
  flagURL,
  name,
}) => {
  return (
    <div className='bg-white shadow-lg w-40 h-64 rounded-xl p-5'>
      <div className='bg-teal-400 w-full h-20 mb-5 rounded border shadow-lg'></div>
      <div className='w-full h-20'>
        <img
          className='border border-gray-500 shadow-lg'
          src={flagURL}
          alt={`flag of ${name}`}
        ></img>
      </div>
    </div>
  );
};
