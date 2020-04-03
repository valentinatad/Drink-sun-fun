import React from "react";
import "./pagination.css"
export const Pagination = ({ drinksPerPage, coctailsArr, paginate }) => {

    if (coctailsArr === null) { return (<p></p>) }
    const totalDrinks = coctailsArr.length
    console.log(drinksPerPage);
    console.log(totalDrinks)
    let pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalDrinks / drinksPerPage); i++) { pageNumbers.push(i) }
    console.log(pageNumbers)
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (<li key={number} className="page-item"><a href='!#' onClick={(e) => { e.preventDefault(); paginate(number) }} className="page-link">{number}</a></li>))}
            </ul>
        </nav>
    )
}