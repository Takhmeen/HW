import React from 'react';
import "./Card.css";

export const Card = (props) =>{
    // let name = 'Aigerim';
    // let age = '20';
    // let edu = 'PeakSoft School';
    return <div className='block'>
        {/* <img className='photo' src={logo}  />  второй вариант */}
        <div className='block_name'>{props.name}</div>
        <div className='block_age'>{props.age}</div>
        <div className='block_edu'>{props.edu}</div>
        <img className='photo' src={props.img}></img>
    </div>
}