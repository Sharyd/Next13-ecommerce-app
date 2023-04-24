'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter()

    return (
        <Image
            onClick={() => router.push('/')}
            className="block h-[3.2rem] w-[3.2rem]  sm:h-[4rem] sm:w-[4rem] cursor-pointer"
            src="/images/logo.webp"
            height="60"
            width="60"
            alt="Logo"
        />
    )
}

export default Logo
