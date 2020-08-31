import React from 'react';

export default function SearchFilter(){


    return(
        <div>
            <label htmlFor="filter">Filter:</label>
            <select name="filter">
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>


    )
}