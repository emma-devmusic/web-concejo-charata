import Image from "next/image"
import logo from '../../assets/img/concejo/logo-transparent.png';
import image1 from '../../assets/img/concejo/28.jpg';
import image2 from '../../assets/img/concejo/3.jpg';
import image3 from '../../assets/img/concejo/17.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './banner.css';

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
        <div id="header-carousel" className={`carousel slide carousel-fade`} data-bs-ride="carousel">
            <Slider {...settings}>
                <div className={`carousel-inner`}>
                    <div className="carousel-item active">
                        <Image width={1366} height={900} className={''} style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '900px',
                            minHeight: '400px',
                            objectFit: 'cover'
                        }} src={image1} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "900px" }}>
                                {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
                                <h2 className="display-1 text-white mb-md-4 animated zoomIn">
                                    <Image src={logo} width={600} height={275} className="logo-1 w-100 h-100" alt="logo" style={{
                                        maxWidth: '500px',
                                        height: 'auto'
                                    }} />
                                </h2>
                                <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Noticias</a>
                                <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contactános</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`carousel-inner`}>
                    <div className="carousel-item active">
                        <Image width={1366} height={900} className={``} style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '900px',
                            minHeight: '400px',
                            objectFit: 'cover'
                        }} src={image2} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "900px" }}>
                                {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                                    <Image src={logo} width={600} height={275} className="logo-1 w-100 h-100" alt="logo" style={{
                                        maxWidth: '500px',
                                        height: 'auto'
                                    }} />
                                </h1>
                                <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Noticias</a>
                                <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contactános</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`carousel-inner`}>
                    <div className="carousel-item active">
                        <Image width={1366} height={900} className={``} style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: '900px',
                            minHeight: '400px',
                            objectFit: 'cover'
                        }} src={image3} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "900px" }}>
                                {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
                                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                                    <Image src={logo} width={600} height={275} className="logo-1 w-100 h-100" alt="logo" style={{
                                        maxWidth: '500px',
                                        height: 'auto'
                                    }} />
                                </h1>
                                <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Noticias</a>
                                <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contactános</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

            {/* <button 
            className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div>
    )
}
