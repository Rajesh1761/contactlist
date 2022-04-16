import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                  <Link to="/" className='navbar-brand'>Contact List</Link>
                  &nbsp;
                  <Link to="/" className='text-white text-decoration-none'>Home</Link>
                  &nbsp; <span className='text-white text-decoration-none'>|</span>  &nbsp; 
                  <Link to="/search" className='text-white text-decoration-none'>Search</Link>
                </div>
            </nav>
        </header>
    </div>
  )
}
export default Header;