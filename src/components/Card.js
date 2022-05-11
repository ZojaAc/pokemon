import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from '../provider';
import LazyLoad from 'react-lazyload';

export default function Card({id, name, onAddCatch, isBtnChange}) {
  const { setPokeId } = useContext(DataContext);

  const onClickShowCard = () => {
    setPokeId(id);   
  }

  const onClickCatch = () => {
    onAddCatch({id, name});
    isBtnChange(id);
  }

  // const getDate = () => new Date().toLocaleDateString();

  return (  
    <div className='card flex'>
      <Link to='/pokecard'>
        <div onClick={onClickShowCard}>
          <LazyLoad>
            <img className="card_img-main" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + (id) + '.png'}/>   
          </LazyLoad>
          {/* <img className="card_img-main" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + (id) + '.png'}/>    */}
          <div>
            <span className='card_id'>id: {id}</span>
            <p className='card_name'>{name}</p> 
          </div>                  
        </div>
      </Link>
      <button className={isBtnChange(id) ? 'card_btn card_btn-pushed' : 'card_btn'} onClick={onClickCatch}>{isBtnChange(id) ? `Release` : `Catch`}</button>
    </div>
  )
}
