'use client'
import { useEffect, useState } from "react";
import { Facts, AboutUs, Features, Services, ContactUs, Team, BlogPosts, Footer, Navbar, BackToTop, Banner } from "./components";
import Loading from "./loading";


export default function Home() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000);
  }, [])


  if (!show) return <Loading />
  return (
    <div >
      <Navbar />
      <Banner />
      <Facts />
      <AboutUs />
      <Features />
      <Services />
      <ContactUs />
      {/* <Team /> */}
      <BlogPosts />
      <Footer />
      <BackToTop />
    </div>
  )
}
