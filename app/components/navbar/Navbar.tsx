'use client'

import React, { useState } from 'react'
import Logo from './Logo'
import { HiShoppingCart, HiSearch, HiUser, HiOutlineMenu } from 'react-icons/hi'
import MobileNavigation from './MobileNavigation'
import Search from './Search'
// import Avatar from './Avatar'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)
    return (
        <nav className="w-full fixed px-6 md:px-12   items-start lg:items-center py-6 bg-white z-30 flex justify-between">
            <Logo />
            <ul className="lg:flex hidden gap-8 xl:gap-12 items-center transition-all  text-[0.9rem] uppercase text-black/90">
                <li className="relative">
                    <a
                        href="#"
                        className="hover:text-secondaryDarkRed w-max hover:border-b  hover:border-secondaryDarkRed"
                    >
                        Home
                    </a>
                    {/* <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transition-all duration-300"></span> */}
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:text-secondaryDarkRed w-max hover:border-b  hover:border-secondaryDarkRed"
                    >
                        News
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:text-secondaryDarkRed w-max hover:border-b  hover:border-secondaryDarkRed"
                    >
                        Watches
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:text-secondaryDarkRed w-max hover:border-b  hover:border-secondaryDarkRed"
                    >
                        Acessories
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="hover:text-secondaryDarkRed w-max hover:border-b  hover:border-secondaryDarkRed"
                    >
                        Sale gifts
                    </a>
                </li>
            </ul>
            <div className="flex gap-4 items-center justify-between lg:relative">
                <div className="flex flex-col-reverse flex-1 w-full items-end gap-4">
                    {activeSearch && <Search />}

                    <button
                        onClick={() => setActiveSearch((prev) => !prev)}
                        className="w-12 h-12 hover:bg-secondaryDarkRed/80 transition-all group rounded-full flex items-center justify-center bg-secondaryDarkRed"
                    >
                        <HiSearch className="w-5 h-5 cursor-pointer fill-white/90 group-hover:fill-white" />
                    </button>
                </div>
                <div className=" flex gap-3 md:gap-4 items-center">
                    <MobileNavigation
                        setActiveNav={setActiveNav}
                        activeNav={activeNav}
                    />
                    <button className="w-12 h-12 hover:bg-secondaryDarkRed/80 transition-all group rounded-full flex items-center justify-center bg-secondaryDarkRed ">
                        <HiUser className="w-6 h-6 rounded-full object-cover cursor-pointer  fill-white/90 group-hover:fill-white" />
                    </button>
                    <button className="w-12 h-12 relative hover:bg-secondaryDarkRed/80 transition-all group rounded-full flex items-center justify-center bg-secondaryDarkRed">
                        <span className="absolute -top-2 right-0 text-secondaryDarkRed text-xs w-5 h-5 border border-secondaryDarkRed bg-white rounded-full flex items-center justify-center">
                            2
                        </span>
                        <HiShoppingCart className="w-5 h-5 cursor-pointer fill-white/90 group-hover:fill-white" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
