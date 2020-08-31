import React from 'react';

export default function SearchFilter(){
const filters = ['partial', 'full', 'free-ebooks', 'paid-ebooks', 'ebooks']
const options = filters.map(opt => {

    return (
        <option value={opt}>{opt}</option>
    )


})
    return(
        <div>
            <label htmlFor="filter">Filter:</label>
            <select name="filter">
                {options}
            </select>
        </div>


    )
} 