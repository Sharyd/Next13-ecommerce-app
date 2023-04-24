import React from 'react'
import Video from './Video'
import RolexIcon from './RolexIcon'
import OmegaIcon from './OmegaIcon'
import PatekIcon from './PatekIcon'

const Hero = () => {
    return (
        <header className="relative py-24 flex items-start justify-center h-screen overflow-hidden">
            <section>
                <div className="absolute text-white gap-14 flex p-5 flex-col py-16 left-10 z-20  w-[33%]">
                    <div className="flex gap-8 flex-col">
                        <h1 className="text-6xl text-white capitalize bg-opacity-50 rounded-xl">
                            The Great Choice To Get Your Watch
                        </h1>
                        <p className="bg-opacity-50 rounded-xl ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Omnis, recusandae? Aperiam quae id recusandae
                            velit neque laboriosam consectetur facere doloribus!
                        </p>
                    </div>
                    <div className="relative flex flex-col gap-2">
                        <h2 className="text-2xl capitalize">
                            Who recommends us
                        </h2>
                        <div className="flex items-end justify-start gap-4">
                            <div className="p-3 flex justify-center w-max flex-col gap-2 items-center">
                                <div className="w-8 h-8">
                                    <RolexIcon />
                                </div>
                                <p className="font-semibold text-white/80">
                                    Rolex
                                </p>
                            </div>
                            <div className="p-3 flex justify-center w-max flex-col gap-2 items-center">
                                <div className="w-16 h-16 flex items-center">
                                    <OmegaIcon />
                                </div>
                            </div>
                            <div className="p-3 flex justify-center w-max flex-col gap-2 items-center">
                                <div className="w-20 h-20 flex items-center ">
                                    <PatekIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h2 className="text-2xl capitalize">Who like us</h2>
                        <div className="flex items-center gap-4">
                            <div className="flex">
                                <div>
                                    <img
                                        className="w-8 h-8 opacity-90 outline-2 outline outline-tertiaryYellow rounded-full object-cover"
                                        src="/images/person-1.avif"
                                        alt="person"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="w-9 h-9 opacity-90 outline-2 outline outline-tertiaryYellow rounded-full object-cover"
                                        src="/images/person-2.avif"
                                        alt="person"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="w-10 h-10 opacity-90 outline-2 outline outline-tertiaryYellow rounded-full object-cover"
                                        src="/images/person-3.avif"
                                        alt="person"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="w-11 h-11 opacity-90 outline-2 outline outline-tertiaryYellow rounded-full object-cover"
                                        src="/images/person-4.avif"
                                        alt="person"
                                    />
                                </div>
                            </div>
                            <p>1000 likes from people</p>
                        </div>
                    </div>
                </div>
            </section>

            <Video />
        </header>
    )
}

export default Hero
