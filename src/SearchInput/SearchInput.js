import React from 'react';


export default function SearchInput(props) {

//set value to state search value 
//onChange set state to value 

    return(

    <div>
        <label htmlFor="search">Search</label>
        <input name="search" type="text" value={props.search} onChange={(event) => props.inputFunc(event)}/>
        <label htmlFor="submit"></label>
        <button onClick={(event) => props.submit(event)}>Submit</button>


    </div>
    )
}