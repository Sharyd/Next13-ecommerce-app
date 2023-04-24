'use client'
import React from 'react'
import SliderImages from './SliderImages'
import Image from 'next/image'
const Products = () => {
    return (
        <div className="w-full m-auto my-10">
            <h1 className="text-center bg-tertiaryYellow py-4 text-secondaryDarkRed my-10 text-4xl uppercase">
                Our Best Products
            </h1>
            <div className="flex flex-col gap-8">
                <div className="flex py-10 items-center justify-around w-full">
                    <div className="flex flex-col items-center gap-6 w-[20rem]">
                        <div className="relative ">
                            <span className="w-12 h-12 top-0 right-0 absolute text-3xl text-secondaryDarkRed justify-center flex items-center z-10 bg-tertiaryYellow">
                                2
                            </span>
                            <Image
                                className="block transition duration-300 ease-out cursor-pointer hover:scale-110"
                                src="/images/rolex-cosmograph-daytona.png"
                                height="325"
                                width="325"
                                alt="watches image"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <button className="uppercase w-full py-2 px-3 transition-all text-white/90 hover:bg-secondaryDarkRed/80  bg-secondaryDarkRed">
                                Rolex Cosmograph Daytona
                            </button>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium, libero aliquam
                                nobis accusantium quae
                            </p>
                        </div>
                    </div>

                    <div className="flex group flex-col items-center gap-4 w-[30rem]">
                        <div className="relative">
                            <span className="w-12 h-12 top-0 right-0 absolute text-3xl text-secondaryDarkRed justify-center flex items-center z-10 bg-tertiaryYellow">
                                1
                            </span>
                            <span className="opacity-0 px-2 w-max group-hover:block group-hover:opacity-100 ease-out duration-300 transition rotate-[20deg] top-20 right-0 absolute text-3xl text-secondaryDarkRed justify-center flex items-center z-10 bg-tertiaryYellow">
                                Best Watch
                            </span>
                            <Image
                                className="block transition duration-300 ease-out cursor-pointer hover:scale-110"
                                src="/images/rolex-day-date-40-1.png"
                                height="500"
                                width="500"
                                alt="watches image"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <button className="uppercase z-10 w-full py-2 px-3 transition-all text-white/90 hover:bg-secondaryDarkRed/80  bg-secondaryDarkRed">
                                Rolex Day Date 40
                            </button>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium, libero aliquam
                                nobis accusantium quae
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 w-[20rem]">
                        <div className="relative">
                            <span className="w-12 h-12 top-0 right-0 absolute text-3xl text-secondaryDarkRed justify-center flex items-center z-10 bg-tertiaryYellow">
                                3
                            </span>
                            <Image
                                className="block transition duration-300 ease-out cursor-pointer hover:scale-110"
                                src="/images/rolex-explorer-1.png"
                                height="250"
                                width="250"
                                alt="watches image"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <button className="uppercase w-full py-2 px-3 transition-all text-white/90 hover:bg-secondaryDarkRed/80  bg-secondaryDarkRed">
                                Rolex Explorer
                            </button>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium, libero aliquam
                                nobis accusantium quae
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full justify-around">
                    <div className="flex flex-col items-center gap-4 w-[20rem]">
                        <div className="relative">
                            <span className="w-12 h-12 top-0 right-0 absolute text-3xl text-secondaryDarkRed justify-center flex items-center z-10 bg-tertiaryYellow">
                                4
                            </span>
                            <Image
                                className="block transition duration-300 ease-out cursor-pointer hover:scale-110"
                                src="/images/rolex-yacht-master-2.png"
                                height="250"
                                width="250"
                                alt="watches image"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <button className="uppercase w-full py-2 px-3 transition-all text-white/90 hover:bg-secondaryDarkRed/80  bg-secondaryDarkRed">
                                Rolex yacht master
                            </button>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium, libero aliquam
                                nobis accusantium quae
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 w-[20rem]">
                        <div className="relative">
                            <span className="w-12 h-12 top-0 right-0 absolute text-3xl text-secondaryDarkRed justify-center flex items-center z-10 bg-tertiaryYellow">
                                5
                            </span>
                            <Image
                                className="block transition duration-300 ease-out cursor-pointer hover:scale-110"
                                src="/images/rolex-1908.png"
                                height="250"
                                width="250"
                                alt="watches image"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <button className="uppercase w-full py-2 px-3 transition-all text-white/90 hover:bg-secondaryDarkRed/80  bg-secondaryDarkRed">
                                Rolex 1908
                            </button>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium, libero aliquam
                                nobis accusantium quae
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 w-[20rem]">
                        <div className="relative">
                            <span className="w-12 h-12 top-0 right-0 absolute text-3xl text-secondaryDarkRed justify-center flex items-center z-10 bg-tertiaryYellow">
                                6
                            </span>
                            <Image
                                className="block transition duration-300 ease-out cursor-pointer hover:scale-110"
                                src="/images/air-king-rolex.png"
                                height="250"
                                width="250"
                                alt="watches image"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <button className="uppercase w-full py-2 px-3 transition-all text-white/90 hover:bg-secondaryDarkRed/80  bg-secondaryDarkRed">
                                Air King Rolex
                            </button>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium, libero aliquam
                                nobis accusantium quae
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
