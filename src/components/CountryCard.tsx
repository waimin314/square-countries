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
      <div className='bg-teal-400 w-full h-20'>Hola Mola</div>
      <div className='border-solid border-black w-20 h-20'>
        <img src={flagURL}></img>
      </div>
    </div>
  );
};
