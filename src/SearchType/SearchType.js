import React from 'react';

export default function SearchType(){
    const filters = ['all', 'books', 'magazines']
    const options = filters.map(opt => {
    
        return (
            <option value={opt}>{opt}</option>
        )
    
    
    })

    return(
        <div>
            <label htmlFor="type">Content type:</label>
            <select name="type">
            {options}
            </select>
        </div>


    )
}