import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridRow, GridColumn } from "emotion-flex-grid";

import Card from './Card';

import './footer.scss';

const Footer = () => {

  const [cardList, setCardList] = useState();
  useEffect(() => {
    axios.get('https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf')
      .then(response => setCardList(response.data.slice(0, 6)));
  }, [])

  return (
    <div className='footer-app'>
      <span>Experience The Cardo</span>
      
        <GridRow wrap="wrap" justify="between" align="center">
          {cardList && cardList.map((list, idx) => (
            <GridColumn width={[12, null, 6, 4]} key={idx}>
              <Card data={list} key={idx}/>
            </GridColumn>
          ))}
        </GridRow>

    </div>
  );
}

export default Footer;