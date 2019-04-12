import React from 'react';
import './index.css';

const ListItems = (props) => {

    return (

        <div>
    <div className="result">

        <ul>
        {props.lists.map((ls, index) => {
            return (

            <li key={index}>{ls.lista}<span><i className="fas fa-times" onClick={() => props.delete(index)} ></i></span></li>
            
            )
            })}
            
        </ul>
    </div>


    </div>

    )
}


export default ListItems
