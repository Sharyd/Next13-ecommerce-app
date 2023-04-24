'use client'

import React, { useState, useEffect } from 'react'

interface FixBugClientProps {
    children: React.ReactNode
}

const FixBugClient: React.FC<FixBugClientProps> = ({ children }) => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return null

    return <>{children}</>
}

export default FixBugClient
