'use client'

import Image from "next/image"
import image1 from '../../assets/img/concejo/logo-transparent.png';
import image2 from '../../assets/img/concejo/logo-blue-transparent.png';
import Link from "next/link";
import { useEffect, useRef, useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js";
import './navbar.css'

export const Navbar = () => {

    const ref = useRef<HTMLDivElement>(null);
    const [logoDark, setLogoDark] = useState(false)

    

    useEffect( () => {
        if(typeof window !== "undefined"){
            window.addEventListener("resize", () => {
                if(window.innerWidth < 992) {
                    setLogoDark(true)
                }
            })
            window.addEventListener('scroll', () => {
                if(scrollY > 50) {
                    ref.current?.classList.add('sticky-top', 'shadow-sm')
                    setLogoDark(true)
                } else if(scrollY < 50 && window.innerWidth < 992) {
                    setLogoDark(true)
                } else {
                    ref.current?.classList.remove('sticky-top', 'shadow-sm')
                    setLogoDark(false)
                }
            })
        }
    }, [])


    

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark px-3 py-1 py-lg-0 px-lg-5 `} ref={ref}>
                <Link href="/" className="navbar-brand p-0">
                    {
                        logoDark 
                        ? <Image src={image2} width={150} height={80} className="logo-1 p-2" alt="logo"/>
                        : <Image src={image1} width={165} height={80} className="logo-1" alt="logo"/>
                    }
                    
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <Icon icon='material-symbols:menu' className="fs-2"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <div className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown">El Concejo</div>
                            <div className="dropdown-menu m-0">
                                <Link href={'/concejo-del-municipio'} className="dropdown-item">Concejo del Municipio </Link>
                                <Link href={'/concejales'} className="dropdown-item">Concejales</Link>
                                <Link href="/comisiones" className="dropdown-item">Comisiones</Link>

                                {/* <Link href={'/transparencia'} className="dropdown-item">Transparencia</Link> */}
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sesiones del Concejo</div>
                            <div className="dropdown-menu m-0">
                                <Link href="/sesiones-del-concejo" className="dropdown-item">¿Qué Son Las Sesiones Del Concejo?</Link>
                                <Link href="/informe-de-sesiones" className="dropdown-item">Resúmenes de Sesiones</Link>
                                <Link href="/orden-del-dia" className="dropdown-item">Orden Del Día</Link>
                            </div>
                        </div>
                        <Link href="/legislacion" className="nav-item nav-link no-wrap">Legislación</Link>
                        <Link href="/shares" className="nav-item nav-link no-wrap">Participación</Link>
                        <Link href="/contacto" className="nav-item nav-link no-wrap">Contacto</Link>
                    </div>
                    {/* <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><Icon icon={'material-symbols:search'} className="fs-3"/></button> */}
                </div>
            </nav>
        </>
    )
}
