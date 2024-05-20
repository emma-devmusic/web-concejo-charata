import Image from "next/image"
import logo from '../../assets/img/concejo/logo-transparent.png';
import image1 from '../../assets/img/concejo/3.jpg';
import style from './banner.module.css';

export const Banner = () => {
    return (
        <div id="header-carousel" className={`carousel slide carousel-fade ${style.headerCarousel}`} data-bs-ride="carousel">
            <div className={`carousel-inner ${style.containerImg}`}>
                <div className="carousel-item active">
                    <Image width={1920} height={1080} className={`${style.img}`} style={{
                        objectFit: 'cover'
                    }} src={image1} alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: "900px" }}>
                            {/* <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5> */}
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                                <Image src={logo} width={600} height={275} className="logo-1 w-100 h-100" alt="logo"/>
                            </h1>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
