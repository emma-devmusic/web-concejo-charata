import logo from '../../assets/img/concejo/logo-transparent.png';
import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"
import Link from 'next/link';

export const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center bg-primary p-4 h-100">

                                <p className="mt-3 mb-4"> Nos esforzamos por ser un órgano transparente, inclusivo y responsable, comprometido con la participación ciudadana y la toma de decisiones que reflejen las necesidades y aspiraciones de todos los charatenses.</p>
                              
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Contactanos</h3>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <Icon className='me-1' icon={'mdi:google-maps'} />
                                        <p className="mb-0">Rivadavia 372, Charata, Chaco</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <Icon className='me-1' icon={'ri:mail-fill'} />
                                        <p className="mb-0">concejoch@gmail.com</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <Icon className='me-1' icon={'ic:round-phone'} />
                                        <p className="mb-0">+012 345 6789</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <Link className="btn btn-primary btn-square me-2" href="#"><Icon icon="ri:facebook-fill" /></Link>
                                        <Link className="btn btn-primary btn-square" href="#"><Icon icon="mdi:instagram" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="text-light mb-0">Enlaces</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <Link className="text-light mb-2" href="#"><Icon icon="material-symbols-light:line-end-arrow" className="me-2 text-primary" />Home</Link>
                                        <Link className="text-light mb-2" href="#"><Icon icon="material-symbols-light:line-end-arrow" className="me-2 text-primary" />About Us</Link>
                                        <Link className="text-light mb-2" href="#"><Icon icon="material-symbols-light:line-end-arrow" className="me-2 text-primary" />Our Services</Link>
                                        <Link className="text-light mb-2" href="#"><Icon icon="material-symbols-light:line-end-arrow" className="me-2 text-primary" />Meet The Team</Link>
                                        <Link className="text-light mb-2" href="#"><Icon icon="material-symbols-light:line-end-arrow" className="me-2 text-primary" />Latest Blog</Link>
                                        <Link className="text-light" href="#"><Icon icon="material-symbols-light:line-end-arrow" className="me-2 text-primary" />Contact Us</Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                                        <Image src={logo} width={600} height={275} className="logo-1 w-100 h-auto" alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-white" style={{background: "#061429"}}>
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-6">
                            <div className="d-flex align-items-center justify-content-center flex-column" style={{height: "75px"}}>
                                <p className="mb-0">
                                    &copy; 
                                    <a className="text-white border-bottom" href="#">Consejo De La Municipalidad de Charata</a>
                                    . Todos los derechos reservados. 
                                    {/* Designed by <a className="text-white border-bottom" href="https://htmlcodex.com"> HTML Codex</a> */}
                                </p>
                                <p className="mb-0">
                                    <i>Powered By: <a className="border-bottom" href="https://ding.com.ar" target="_blank">Ding | Marketing & Development</a></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}