import React from 'react';
import Card from './Card';

export default function CardList({ clothes, onReceive, currentBalance, pricePerCloth }) {
  return (
    <ul>
      { clothes && clothes.reverse().map(cloth => (
        <React.Fragment key={cloth.id}>
          <Card cloth={cloth} onReceive={onReceive} currentBalance={currentBalance} pricePerCloth={pricePerCloth} />
        </React.Fragment>
      )) }
    </ul>
  );
}
