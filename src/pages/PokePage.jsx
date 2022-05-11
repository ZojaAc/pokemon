import React from "react";
import PokeCard from "../components/PokeCard";

export default function PokePage({listDetails, abilityList, typesList, imgList}) {
  return (
    <div>
      <h1 className="title">Pokemon personal card</h1>
      {<PokeCard
        id={listDetails.id}
        name={listDetails.name} 
        weight={listDetails.weight} 
        abilities={abilityList.map((item) => (`${item.ability.name + ', '}`))} 
        types={typesList.map((item) => (`${item.type.name + ', '}`))}
        img={imgList}
      />}
    </div>
  )
}