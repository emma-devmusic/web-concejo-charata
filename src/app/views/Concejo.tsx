'use client'

import { BackToTop, Content, Navbar, SidebarNavigation, SmallBanner } from "../components"

export const Concejo = () => {
    return (
        <div>
            <Navbar />
            <SmallBanner title="El Concejo" />
            <BackToTop />
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-8">
                        <Content/>
                    </div>
                    <SidebarNavigation />
                </div>
            </div>
        </div>
    )
}

