'use client'
import { BackToTop, Footer, Navbar, SmallBanner } from "../components"

interface Props {
    children: React.ReactNode;
    title: string;
}

export const Layout = ({ children, title }: Props) => {
    return (
        <div>
            <Navbar />
            <SmallBanner title={title} />
            <BackToTop />
            <div className="container py-3">
                {children}
            </div>
            <Footer />
        </div>
    )
}
