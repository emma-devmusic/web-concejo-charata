import { useRef, useState } from "react";
import { Topbar, NavBanner, Facts, AboutUs, Features, Services, ContactUs, Team, BlogPosts, Footer } from "../components";

export const HomeView = () => {

    

    return (
        <div >
            <Topbar />
            <NavBanner />
            <Facts />
            <AboutUs />
            <Features />
            <Services />
            <ContactUs />
            <Team />
            <BlogPosts />
            <Footer />
        </div>
    )
}
