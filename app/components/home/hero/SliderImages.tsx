'use client'

import Image from 'next/image'
const Logo = () => {
    return (
        <Image
            className="block cursor-pointer"
            src="/images/pinkWatches.webp"
            height="60"
            width="60"
            alt="watches image"
        />
    )
}

export default Logo
