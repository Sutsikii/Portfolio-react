import React from 'react';

//import 
import Socials from './Socials';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom'

const Header = () =>{
    return (
    <header className="fixed w-full px-[100px] lg:px[100px] z-30 h-[80px] lg:h-[80px] flex items-center bg-white"> 
        <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
            <Link to={'/'} className='max-w-[200px] font-bold text-2 xl'>
                <h1>Nicolas Dutertre</h1>
            </Link>
            <nav className='hidden lg:flex gap-x-12 font-semibold'>
                <Link 
                to={'/'} 
                className='text-[#696c6d] hover:text-[#000000] transition'>
                    Accueil
                </Link>
                <Link 
                to={'/propos'} 
                className='text-[#696c6d] hover:text-[#000000] transition'>
                    A Propos
                </Link>
                <Link 
                to={'/portfolio'} 
                className='text-[#696c6d] hover:text-[#000000] transition'>
                    Portfolio
                </Link>
                <Link 
                to={'/contact'} 
                className='text-[#696c6d] hover:text-[#000000] transition'>
                    Contact
                </Link>
            </nav>
        </div>
        <Socials />
        <MobileNav />
    </header>
    )
};

export default Header;