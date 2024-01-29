import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBookBookmark, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const {user} = useContext(AuthContext); 
    // console.log(user);

    //toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, [])

    //Nav Items
    const navItems = [
        {link:"Home", path:"/"},
        {link:"About", path:"/about"},
        {link:"Shop", path:"/shop"},
        {link:"Upload your Book", path:"/admin/dashboard"},
        // {link:"Blog", path:"/blog"},
    ]
  return (
    <header className='w-full bg-transparent bg-black fixed top-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-black" : "bg-black"}`}>
        <div className='text-black flex justify-between items-center text-base'>
            {/* logo */}
            <Link to="/" className='text-2xl font-bold text-[#fffc4c] items-center gap-2'>
                <FaBookBookmark className='inline-block'/> BooK<span className='text-white'>VersE</span>
            </Link>

            {/* nav item for large devices */}
            <ul className='md:flex space-x-12 hidden'>
                {navItems.map(({link, path}) => 
                    <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-[#fffc4c]'>{link}</Link>
                )}
            </ul>

            {/* btn for lg devices */}
            <div className='space-x-12 hidden lg:flex items-center text-white'>
                <button><FaBarsStaggered className='w-5 text-white hover:text-[#fffc4c]'/></button>
                 {
                    user ? user.displayName:" "
                 }
            </div>

            {/* menu btn for mobile device */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none'>
                    {
                        isMenuOpen ? <FaXmark className='h-5 w-5 text-white'/> : <FaBarsStaggered className='h-5 w-5 text-white'/>
                    }
                </button>
            </div>
        </div>

        {/* nav items for sm device */}
        <div className={`space-y-4 mt-12 px-4 py-7 bg-[#6c7178] ${isMenuOpen ? "block fixed top-2 right-0 left-0": "hidden"}`}>
        {navItems.map(({link, path}) => 
                    <Link key={path} to={path} onClick={() => setIsMenuOpen(false)} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>
                )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
