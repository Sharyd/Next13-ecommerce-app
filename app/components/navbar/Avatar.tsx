'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Props {
    className?: string
}

const Logo = ({ className }: Props) => {
    const router = useRouter()

    return (
        <Image
            onClick={() => router.push('/')}
            className={`block cursor-pointer ${className}`}
            src="/images/person.avif"
            height="60"
            width="60"
            alt="Logo"
        />
    )
}

export default Logo
