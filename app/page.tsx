import Image from 'next/image'
import { Inter } from 'next/font/google'

import FixBugClient from './components/FixBugClient'
import Container from './components/Container'
import Video from './components/home/hero/Video'
import Products from './components/home/products/BestProductsSection'
import Hero from './components/home/hero/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <FixBugClient>
            <Hero />
            <Container>
                <Products />
            </Container>
        </FixBugClient>
    )
}
