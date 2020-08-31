import React from 'react';


export default function ResultItem(props){
const authors = {...props.author}


    return <div className='result-item'>
                <h2>{props.title}</h2>
                <div className='item-content'>
                    <div className='item-image'><img alt= {props.title} src={props.image} /></div>
                    <div className='item-info'>
                        <h3>Author: {authors[0]}</h3>
                        <h3>Price: {props.cost}</h3>
                        <p>description of book{props.desc}</p>
                    </div>
                </div>
            </div>
}