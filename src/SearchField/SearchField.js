import React from 'react';

import SearchInput from '../SearchInput/SearchInput';
import SearchFilter from '../SearchFilter/SearchFilter';
import SearchType from '../SearchType/SearchType';
export default function SearchField(props){

    return (
        <form>
            <SearchInput search={props.search} submit={props.submit} inputFunc={props.inputFunc}/>
            <SearchFilter />
            <SearchType />
        </form>

    )
}