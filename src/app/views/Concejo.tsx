'use client'

import { BackToTop, ContentInformation, Navbar, SidebarNavConcejo, SmallBanner } from "../components"
import { useState } from 'react';
import { Layout } from "./Layout";

export const Concejo = () => {

    const [ isActive, setIsActive ] = useState(false);

    return (
        <div>
            <Layout title="El Concejo">
                <div className="row g-2">
                    <div className="col-lg-8">
                        <ContentInformation setIsActive={setIsActive}/>
                    </div>
                    <SidebarNavConcejo isActive={isActive} setIsActive={setIsActive} />
                </div>
            </Layout>
        </div>
    )
}

