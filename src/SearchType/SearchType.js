import React from 'react';

export default function SearchType(){


    return(
        <div>
            <label htmlFor="type">Content type:</label>
            <select name="type">
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>
        </div>


    )
}