import React from 'react';
import childs from './../childs.json';
import { Link } from 'react-router-dom';
import NavBar2 from './NavBar2';
import './../styles/Home.css';


export default function Child() {
    return (
        
        <div className="div1">
            <h1><NavBar2/></h1>
        <div className="div2">
            {Object.keys(childs).map(keyName=>{
                const shoe = childs[keyName];
                return (
                    <Link key={keyName} >
                        <h4>{shoe.name}</h4>
                        <img src={shoe.img} height={150} alt="shoe" />
                    </Link>
                );

            })}
        </div>
    </div>
    )
}
