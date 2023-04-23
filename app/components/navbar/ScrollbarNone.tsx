'use client'

import React, { useEffect } from 'react'

export const ScrollbarNone = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    })
    return null
}
