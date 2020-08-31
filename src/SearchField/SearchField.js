import React from 'react';

import SearchInput from '../SearchInput/SearchInput';
import SearchFilter from '../SearchFilter/SearchFilter';
import SearchType from '../SearchType/SearchType';
export default function SearchField(props){

    console.log(props.inputFunc)
    return (
        <form>
            <SearchInput search={props.search} inputFunc={props.inputFunc}/>
            <SearchFilter />
            <SearchType />
        </form>

    )
}