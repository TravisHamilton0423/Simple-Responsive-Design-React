import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import ActiveItems from './ActiveItems';

const Left = () => {
  return (
    <div className='left-app'>
      <Header />
      <Dashboard />
      <ActiveItems />
      <div className='first-ellipse'></div>
      <div className='second-ellipse'></div>
    </div>
  )
}

export default Left;