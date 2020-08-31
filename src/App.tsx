import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className='flex content-center flex-wrap bg-yellow-400'>
      <h1 className='m-5 w-full text-center text-bold text-5xl'>
        Square Countries
      </h1>
      <Search />
    </div>
  );
}

export default App;
