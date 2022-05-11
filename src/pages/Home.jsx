import React from 'react';
import Card from '../components/Card';

export default function Home({listItems, onAddToCatched, isItemAdded}) {
  return (
    <div className='main'>
      <h1 className='title'>Catch pokemon</h1>
      <div className='wrapper flex wrap'>
        {listItems.map((item, index) => (
          <Card 
            name={item.name}
            id={index+1}
            key={index}
            onAddCatch={(obj) => onAddToCatched(obj)}
            isBtnChange={isItemAdded}
          />  
        ))}   
      </div>
    </div>
  )
}