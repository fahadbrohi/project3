import React from 'react'
import { Link } from 'react-router-dom';
import './../styles/Home.css';

export default function NavBar2() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/Gents'>Gents</Link>
            <Link to='/Child'>Childs</Link>
            <Link to='/Ladies'>Ladies</Link>
            
        </div>
    )
}
