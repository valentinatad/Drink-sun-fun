import React from "react";
import './listOfRecipes.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
export const ListOfRecipes = ({ coctailsArr, IndexOfFirstDrinks, IndexOfLastDrinks }) => {
    if (coctailsArr === []) { return }
    if (coctailsArr === null) { return (<p className="alert">There is no drink with that name</p>) }

    const currentDrinks = coctailsArr.slice(IndexOfFirstDrinks, IndexOfLastDrinks)
    return (<><div className="listOfCoctails">

        {currentDrinks.map(coctail => <Zoom><div className="coctail" key={coctail.idDrink}>
            <img src={coctail.strDrinkThumb} alt="" className="coctailImg" />
            <p className="name"><b>Name: {coctail.strDrink}</b></p>
            <p><b>Category:</b> {coctail.strCategory}</p>
            <p><b>Ingredients:</b> <label className="blue">{coctail.strIngredient1}</label>  <label className="grey">{coctail.strIngredient2}</label> <label className="blue">{coctail.strIngredient3}</label> <label className="grey">{coctail.strIngredient4}</label> <label className="blue">{coctail.strIngredient5}</label></p>
            <p><b>Recipe:</b> {coctail.strInstructions}</p>
        </div></Zoom>)}</div></>)

}
