import React from 'react';
import './listOfAllDrinks.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export const ListOfAllDrinks = ({ drinks }) => {


     return (<div className="drinkList">

          {drinks.map(drink => <Zoom><Drink dr={drink} key={drink.idDrink} /></Zoom>)
          }
     </div>)
}
const Drink = ({ dr }) => {
     console.log(dr)
     return (
          <div className="drink">
               <img src={dr.strDrinkThumb} alt="" className="listImg" />
               <p >{dr.strDrink}</p></div>
     )
}

