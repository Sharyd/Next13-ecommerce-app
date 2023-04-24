'use client'

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <main className="max-w-[2520px] py-20">{children}</main>
}

export default Container
