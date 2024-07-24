import Image from "next/image"
import logo from '../../assets/img/concejo/logo-transparent.png';
import image1 from '../../assets/img/concejo/28.jpg';
import image2 from '../../assets/img/concejo/3.jpg';
import image3 from '../../assets/img/concejo/17.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './banner.css';
import CountUp from "react-countup";
import Link from "next/link";

export const Banner = () => {

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };



    return (
        <div className="container-fluid banner bg-primary p-0 mb-5">
            <div className="row g-0 align-items-center  flex-lg-row banner-content">
                <div className="col-lg-6 wow fadeIn banner-content_images" data-wow-delay="0.5s">
                    <Slider {...settings}>
                        <div className="carousel-item">
                            <Image className="img-fluid w-100" src={image1} alt="imagen del concejo" />
                        </div>
                        <div className="carousel-item">
                            <Image className="img-fluid w-100" src={image2} alt="imagen del concejo" />
                        </div>
                        <div className="carousel-item">
                            <Image className="img-fluid w-100" src={image3} alt="imagen del concejo" />
                        </div>
                    </Slider>
                </div>
                <div className="col-lg-6 p-5 wow fadeIn banner-content_info" data-wow-delay="0.1s">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex flex-column align-items-center justify-content-center p-3" style={{ maxWidth: "900px" }}>
                            <h2 className=" text-white mb-md-4 animated zoomIn">
                                <Image id="" src={logo} width={600} height={275} className="logo-1 w-100 h-100 logo-banner" alt="logo" style={{
                                    maxWidth: '500px',
                                    height: 'auto'
                                }} />
                            </h2>
                            <div className="d-flex gap-2">
                                <Link href="/shares" className="btn btn-outline-light py-md-3 px-md-5 animated slideInLeft button-banner">Noticias</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div id="header-carousel" className={`carousel slide carousel-fade`} data-bs-ride="carousel">
        //     <Slider {...settings}>
        //         <div className={`carousel-inner`}>
        //             <div className="carousel-item active">
        //                 <Image width={1366} height={900} className={''} style={{
        //                     width: '100%',
        //                     height: 'auto',
        //                     maxHeight: '900px',
        //                     minHeight: '400px',
        //                     objectFit: 'cover'
        //                 }} src={image1} alt="Image" />
        //                 <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
        //                     <div className="p-3" style={{ maxWidth: "900px" }}>
        //                         {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
        //                         <h2 className="display-1 text-white mb-md-4 animated zoomIn">
        //                             <Image id="" src={logo} width={600} height={275} className="logo-1 w-100 h-100 logo-banner" alt="logo" style={{
        //                                 maxWidth: '500px',
        //                                 height: 'auto'
        //                             }} />
        //                         </h2>
        //                         <a href="/shares" className="btn btn-primary py-md-3 px-md-5 me-2 animated slideInLeft button-banner">Noticias</a>
        //                         <a href="/contactanos" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight button-banner">Contactános</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={`carousel-inner`}>
        //             <div className="carousel-item active">
        //                 <Image width={1366} height={900} className={``} style={{
        //                     width: '100%',
        //                     height: 'auto',
        //                     maxHeight: '900px',
        //                     minHeight: '400px',
        //                     objectFit: 'cover'
        //                 }} src={image2} alt="Image" />
        //                 <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
        //                     <div className="p-3" style={{ maxWidth: "900px" }}>
        //                         {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
        //                         <h1 className="display-1 text-white mb-md-4 animated zoomIn">
        //                             <Image src={logo} width={600} height={275} className="logo-1 w-100 h-100 logo-banner" alt="logo" style={{
        //                                 maxWidth: '500px',
        //                                 height: 'auto'
        //                             }} />
        //                         </h1>
        //                         <a href="/shares" className="btn btn-primary py-md-3 px-md-5 me-2 animated slideInLeft button-banner">Noticias</a>
        //                         <a href="/contactanos" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight button-banner">Contactános</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={`carousel-inner`}>
        //             <div className="carousel-item active">
        //                 <Image width={1366} height={900} className={``} style={{
        //                     width: '100%',
        //                     height: 'auto',
        //                     maxHeight: '900px',
        //                     minHeight: '400px',
        //                     objectFit: 'cover'
        //                 }} src={image3} alt="Image" />
        //                 <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
        //                     <div className="p-3" style={{ maxWidth: "900px" }}>
        //                         {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
        //                         <h1 className="display-1 text-white mb-md-4 animated zoomIn">
        //                             <Image src={logo} width={600} height={275} className="logo-1 w-100 h-100 logo-banner" alt="logo" style={{
        //                                 maxWidth: '500px',
        //                                 height: 'auto'
        //                             }} />
        //                         </h1>
        //                         <a href="/shares" className="btn btn-primary py-md-3 px-md-5 me-2 animated slideInLeft button-banner">Noticias</a>
        //                         <a href="/contactanos" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight button-banner">Contactános</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </Slider>

        //     {/* <button 
        //     className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
        //         data-bs-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
        //         data-bs-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Next</span>
        //     </button> */}
        // </div>
    )
}
