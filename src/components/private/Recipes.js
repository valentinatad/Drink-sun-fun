import React, { useState } from "react";
import { listOfRecipes } from "../services/Service";
import { ListOfRecipes } from "./ListOfRecipes";
import './recipes.css'
import { Pagination } from "./Pagination";

export const Recipes = () => {
        const [name, setName] = useState('')
        const [coctailsArr, setCoctailsArr] = useState([])
        // const [ingredient, setIngredient] = useState([])
        const [currentPage, setCurrentPage] = useState(1);
        const [drinksPerPage] = useState(6);

        const handleChange = (e) => {
                setName(e.target.value)
                listOfRecipes(name).then(response => setCoctailsArr(response.data.drinks))
        }
        // const handleChange2 = () => {

        //     listOfIngredients(ingredient).then(response => {if(response.data===""){return} else{setCoctailsArr(response.data.drinks)}})
        // }
        const IndexOfLastDrinks = currentPage * drinksPerPage;
        const IndexOfFirstDrinks = IndexOfLastDrinks - drinksPerPage;

        // const currentDrinks = coctailsArr.slice(IndexOfFirstDrinks, IndexOfLastDrinks )
        const paginate = (pageNumber) => { setCurrentPage(pageNumber) };

        return (<>
                <div className="search">
                        <input type="text" placeholder="Search recipes by name" onInput={(e) => handleChange(e)} className="searchName" />
                        {/* <input type="text" placeholder="Search drinks by ingredient" onInput={(e)=>setIngredient(e.target.value)} onChange={(e)=>handleChange2(e)} className="inputIngredient"/> */}
                </div>

                <ListOfRecipes coctailsArr={coctailsArr} IndexOfFirstDrinks={IndexOfFirstDrinks} IndexOfLastDrinks={IndexOfLastDrinks} />
                <Pagination drinksPerPage={drinksPerPage} coctailsArr={coctailsArr} paginate={paginate} />

        </>
        )
}