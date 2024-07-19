
import { Facts, AboutUs, Features, Services, ContactUs, Team, BlogPosts, Footer, Navbar, BackToTop, Banner } from "../components";


export const HomeView = () => {

    return (
        <div >
            <Navbar />
            <Banner />
            <Facts />
            <AboutUs />
            <Features />
            <Services />
            <ContactUs />
            <BlogPosts />
            <Footer />
            <BackToTop />
        </div>
    )
}
