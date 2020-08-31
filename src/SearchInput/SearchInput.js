import React from 'react';


export default function SearchInput(props) {

    console.log(props)

//set value to state search value 
//onChange set state to value 

    return(

    <div>
        <label htmlFor="search">Search</label>
        <input name="search" type="text" value={props.search} onChange={() => props.inputFunc()}/>


    </div>
    )
}