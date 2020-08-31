import React from 'react';


export default function ResultItem(props){

    return <div className='result-item'>
                <h2>{props.title}</h2>
                <div className='item-content'>
                    <div className='item-image'>image{props.image}</div>
                    <div className='item-info'>
                        <h3>Author: Stephen King{props.author}</h3>
                        <h3>Price: $1{props.price}</h3>
                        <p>description of book{props.desc}</p>
                    </div>
                </div>
            </div>
}