import React from 'react';
import '../../src/index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' nav-wrapper'>
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/todo">Todo</Link> </li>
            <li> <Link to="/budget-analysis"> Budget</Link> </li>
        </ul>
      
    </div>
  )
}

export default Navbar
