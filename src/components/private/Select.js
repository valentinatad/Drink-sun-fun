import React, { useState, useEffect } from 'react';
import { getCategories, listOfDrinks } from '../services/Service';
import { ListOfAllDrinks } from './ListOfAllDrinks'
import './select.css'
import { Pagination } from "./Pagination"



export const Select = () => {
    const [optionsText, setOptionsText] = useState([]);
    const [allDrinks, setAllDrinks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [drinksPerPage] = useState(8);

    useEffect(() => { getCategories().then(drinks => { setOptionsText(drinks) }) }, [])
    const handleChange = (e) => {
        const option = e.target.value;
        if (option === "") { return }
        listOfDrinks(option).then(value => setAllDrinks(value.data.drinks));
    }
    console.log(allDrinks)
    const IndexOfLastDrinks = currentPage * drinksPerPage;
    const IndexOfFirstDrinks = IndexOfLastDrinks - drinksPerPage;
    const currentDrinks = allDrinks.slice(IndexOfFirstDrinks, IndexOfLastDrinks)
    const paginate = (pageNumber) => { setCurrentPage(pageNumber) };
    console.log(allDrinks.length)

    return (<>

        <div className="select">

            <select onChange={(e) => handleChange(e)} className="selectOption">
                <option value="">Select a beverage category</option>
                {optionsText.map(opt => <option value={opt.strCategory} key={opt.strCategory}>{opt.strCategory} </option>)}
            </select> </div>
        <ListOfAllDrinks drinks={currentDrinks} />
        <Pagination drinksPerPage={drinksPerPage} coctailsArr={allDrinks} paginate={paginate} />
    </>)
}