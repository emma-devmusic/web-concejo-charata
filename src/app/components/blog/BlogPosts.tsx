import Image from "next/image"
import blog1 from '../../assets/img/blog-1.jpg';
import blog2 from '../../assets/img/blog-2.jpg';
import blog3 from '../../assets/img/blog-3.jpg';

export const BlogPosts = () => {


    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                    <h5 className="fw-bold text-primary text-uppercase">Blogs - Noticias</h5>
                    <h1 className="mb-0">Enterate de Noticias y Resúmenes de Sesiones</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <Image width={400} height={280} className="img-fluid" src={blog1} alt="Imagen de la noticia"/>
                                    <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Tema</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>Redactado por:</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">Titulo de Noticia</h4>
                                <p>Breve descripción de la noticia</p>
                                <a className="text-uppercase" href="">Leer Más <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <Image width={400} height={280} className="img-fluid" src={blog2} alt="Imagen de la noticia"/>
                                    <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Tema</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>Redactado por:</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">Titulo de la Noticia</h4>
                                <p>Breve descripción de la noticia</p>
                                <a className="text-uppercase" href="">Leer más <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                        <div className="blog-item bg-light rounded overflow-hidden">
                            <div className="blog-img position-relative overflow-hidden">
                                <Image width={400} height={280} className="img-fluid" src={blog3} alt="Imagen de la noticia"/>
                                    <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Tema</a>
                            </div>
                            <div className="p-4">
                                <div className="d-flex mb-3">
                                    <small className="me-3"><i className="far fa-user text-primary me-2"></i>Redactado por:</small>
                                    <small><i className="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h4 className="mb-3">Titulo de la Noticia</h4>
                                <p>Breve descripción de la noticia</p>
                                <a className="text-uppercase" href="">Leer más <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
