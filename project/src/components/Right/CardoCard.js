import React from 'react';
import { GridRow } from "emotion-flex-grid";
import CardHeader from './CardHeader';
import ElectricCard from './ElectricCard';
import CardFooter from './CardFotter';

const CardoCard = () => {
  return (
      <GridRow direction='column' justify='around' wrap='wrap' className='cardo-card'>
        <div className='card-rect rotated'></div>
        <div className='card-rect'></div>
        <CardHeader />
        <ElectricCard />
        <CardFooter title="$12,455.00" content="**5678"/>
      </GridRow>
  )
}

export default CardoCard;