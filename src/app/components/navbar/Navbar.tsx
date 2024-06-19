'use client'
import Image from "next/image"
import image1 from '../../assets/img/concejo/logo-transparent.png';
import image2 from '../../assets/img/concejo/logo-blue-transparent.png';
import { useRef, useState } from "react"
import './navbar.css'
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Navbar = () => {

    const ref = useRef<HTMLDivElement>(null);
    const [logoDark, setLogoDark] = useState(false)
    
    
    window.addEventListener('scroll', () => {
        if(scrollY > 50) {
            ref.current?.classList.add('sticky-top', 'shadow-sm')
            setLogoDark(true)
        } else {
            ref.current?.classList.remove('sticky-top', 'shadow-sm')
            setLogoDark(false)
        }
    })

    


    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0" ref={ref}>
                <Link href="/" className="navbar-brand p-0">
                    {
                        logoDark 
                        ? <Image src={image2} width={150} height={80} className="logo-1 p-2" alt="logo"/>
                        : <Image src={image1} width={165} height={80} className="logo-1" alt="logo"/>
                    }
                    
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    {/* <span className="fa fa-bars"></span> */}
                    <Icon icon='material-symbols:menu' />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="about.html" className="nav-item nav-link">El Concejo</a>
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Concejales</a>
                            <div className="dropdown-menu m-0">
                                <a href="blog.html" className="dropdown-item">Concejales</a>
                                <a href="detail.html" className="dropdown-item">Blog Detail</a>
                            </div>
                        </div> */}
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sesiones del Concejo</a>
                            <div className="dropdown-menu m-0">
                                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                <a href="feature.html" className="dropdown-item">Our features</a>
                                <a href="team.html" className="dropdown-item">Team Members</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="quote.html" className="dropdown-item">Free Quote</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Proyectos y Ordenanzas</a>
                        <a href="contact.html" className="nav-item nav-link">Transparencia</a>
                        <a href="contact.html" className="nav-item nav-link">Participación Ciudadana</a>
                        <a href="contact.html" className="nav-item nav-link">Contacto</a>
                    </div>
                    <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><Icon icon={'material-symbols:search'} className="fs-3"/></button>
                </div>
            </nav>
        </>
    )
}
