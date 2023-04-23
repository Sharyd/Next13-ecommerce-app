import React from 'react'

const Search = () => {
    return (
        <div className="md:absolute w-full top-16 right-20 md:right-32 md:w-[20rem]">
            <input
                type="text"
                placeholder="Search"
                className="border outline-secondaryDarkRed rounded-none w-full border-gray-300  px-4 py-2"
            />
        </div>
    )
}

export default Search
