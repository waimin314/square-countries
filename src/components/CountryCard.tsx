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
    <div className='bg-white shadow-lg w-40 h-64 rounded-lg p-5'>
      <div className='bg-teal-400 w-full h-20 mb-5'></div>
      <div className='w-full h-20 border border-gray-500'>
        <img src={flagURL} alt={`flag of ${name}`}></img>
      </div>
    </div>
  );
};
