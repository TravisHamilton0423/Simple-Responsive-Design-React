import React from 'react';
import Stars from '../Common/Stars';
import CardoCard from './CardoCard';
import './Right.scss';

const Right = () => {
  return (
    <>
      <div className='stars'>
        <Stars />
      </div>
      <CardoCard />
      <div className='lines-image'></div>
      <div className='hand-image'> </div>
    </>
  )
}

export default Right;