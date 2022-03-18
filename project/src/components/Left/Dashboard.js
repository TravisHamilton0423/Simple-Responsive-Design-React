import { GridRow } from 'emotion-flex-grid';
import React from 'react';
import Button from '../Common/Button';
import Stars from '../Common/Stars';
const Dashboard = () => {
  return (
    <GridRow className='dashboard-app' direction='column'>
      <GridRow justify='between' align='center'>
        <img className='flowers' src="flowers.png" alt="***" width='52px' height='15px' />
        <div className='dashboard-stars'>
          <Stars />
        </div>
      </GridRow>
      <span>All the <b>experience</b> <br/> in the new credit card</span> <br />
      <img className='arrow-image' src='arrow.png' width='92px' height='27px' alt='arrow'/>
      <div className='content'>Simple transfers, payments for utilities, functional statemement, card settings, for which you used to have to go too the brach oonline-banking</div>
      <div className='button-group'>
        <Button text="Order a card" color="#fff" backgroundColor="#11253E"  icon={false}/>
        <GridRow align='center'>
          <Button text="How it works" color="#0A2540" backgroundColor="#fff" icon={true}></Button>
        </GridRow>
      </div>
    </GridRow>
  )
}

export default Dashboard;