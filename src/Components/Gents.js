import React from 'react'
import { Link } from 'react-router-dom';
import gents from './../gents.json';
import NavBar2 from './NavBar2';
import './../styles/Home.css';



export default function Gents() {

    return (
        <div className="div1">
            <h1><NavBar2/></h1>
            
            <div className="div2">
                {Object.keys(gents).map(keyName=>{
                    const shoe = gents[keyName];
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
