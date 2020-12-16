import React from 'react'
import { Link } from 'react-router-dom';
import './../styles/Home.css';
export default function NavBar() {
    return (
        <div className="navbar">
            <Link  className='text' to='/Gents'>Gents</Link>
            <Link className='text' to='/Child'>Childs</Link>
            <Link className='text' to='/Ladies'>Ladies</Link>
        </div>
    )
}
