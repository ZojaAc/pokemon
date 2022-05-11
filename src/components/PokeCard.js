import React from "react";

export default function PokeCard({name, id, weight, abilities, types, img}) {
  return (
    <>
      <div className='card flex card_details'>
        <img className="card_img" src={img}/>        
        <div>
          <span className='card_id'>id: {id}</span>
          <p className='card_name'>{name}</p>     
          <p className="card_details">abilities: {abilities}</p>
          <p className="card_details">types: {types}</p>
          <span className="card_details">weight: {weight}</span>   
        </div>
      </div> 
    </>       
  )
}
