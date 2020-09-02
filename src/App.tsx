import React from 'react';
import Search from './components/Search';
import Sort from './components/Sort';

function App() {
  return (
    <div className='flex content-center flex-wrap bg-yellow-400'>
      <h1 className='m-5 w-full text-center text-bold text-5xl'>
        Square Countries
      </h1>
      <div className='flex flex-row w-full mx-64'>
        <div className='w-1/5 mr-2'>
          <Sort />
        </div>
        <div className='w-4/5 mr-2'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
