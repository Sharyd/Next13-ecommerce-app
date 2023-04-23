'use client'
import React from 'react'
import ReactDOM from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenu, HiSearch, HiShoppingCart, HiUser } from 'react-icons/hi'
import Backdrop from './Backdrop'
import { ScrollbarNone } from './ScrollbarNone'
interface Props {
    activeNav: boolean
    setActiveNav: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNavigation = ({ setActiveNav, activeNav }: Props) => {
    return (
        <div className="flex  lg:hidden z-50 justify-between items-center h-full w-full">
            {activeNav && <ScrollbarNone />}
            {!activeNav && (
                <button
                    onClick={() => setActiveNav(true)}
                    className="w-12 h-12 lg:hidden hover:bg-secondaryDarkRed/80 transition-all group rounded-full flex items-center justify-center bg-secondaryDarkRed"
                >
                    <HiOutlineMenu className="w-5 h-5 cursor-pointer text-white/90 group-hover:fill-white" />
                </button>
            )}

            <div
                className={`${
                    activeNav
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-full opacity-0 '
                } right-0 overflow-x-hidden transition-all w-[50%] absolute top-0 ease-in-out duration-300 bg-white  z-50`}
            >
                <button
                    onClick={() => setActiveNav(false)}
                    className="absolute right-4 top-4  w-12 h-12 lg:hidden hover:bg-secondaryDarkRed/80 transition-all group rounded-full flex items-center justify-center bg-secondaryDarkRed"
                >
                    <AiOutlineClose className="w-5 h-5 cursor-pointer text-white/90 group-hover:fill-white" />
                </button>
                <div className="flex flex-col px-10 min-h-[100vh] items-start justify-start mt-24 lg:mt-0">
                    <ul className="flex gap-6 flex-col items-start justify-center h-full ">
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
                </div>
            </div>

            {activeNav && <Backdrop setActiveNav={setActiveNav} />}
        </div>
    )
}
export default MobileNavigation
