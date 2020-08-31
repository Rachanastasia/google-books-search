import React from 'react';
import ResultItem from '../ResultsItem/ResultItem';

// map each book item as a <ResultItem /> to an array, return array

export default function Results(props){

    return <div>
        <ResultItem title={props.state.title}/>
        <ResultItem />
    </div>

}