import React from 'react';
import ResultItem from '../ResultsItem/ResultItem';

// map each book item as a <ResultItem /> to an array, return array

export default function Results(props){

const books = props.books;


return books.map(book =>{

console.log(book.volumeInfo.imageLinks)

    return (
        <div>
            <ResultItem  image={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title}  desc={book.volumeInfo.description} author={book.volumeInfo.authors} cost={book.saleInfo.saleability === "FOR_SALE" ? book.saleInfo.listPrice.amount : 'Not for sale'}/>
        </div>
    

    )

})

// console.log(newArr)
// //     const newArr = props.books.map(book =>{

// //     console.log(book.volumeInfo.title)
    
// //     // return (
// //     // <div>
// //     //     <ResultItem title={book.volumeInfo.title}/>
// //     // </div>
// //     // )
// // })
// return(
//     <div></div>


}