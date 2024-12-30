import { React, useState } from 'react';
import { Link } from 'react-scroll';

export const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div className='header'>
            <nav className='navbar'>
                <ul className={click ? "nav-menu active" : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='home' spy={true} smooth={true} offset={50} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='skills' spy={true} smooth={true} offset={50} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='projects' spy={true} smooth={true} offset={50} onClick={closeMenu}>Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}