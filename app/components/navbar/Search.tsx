import React from 'react'

const Search = () => {
    return (
        <div className="absolute w-full px-8 md:px-0 top-[100%] right-[0%] lg:top-16 sm:top-24 md:right-32 md:w-[20rem]">
            <input
                type="text"
                placeholder="Search"
                className="border outline-secondaryDarkRed rounded-none w-full border-gray-300  px-4 py-2"
            />
        </div>
    )
}

export default Search
