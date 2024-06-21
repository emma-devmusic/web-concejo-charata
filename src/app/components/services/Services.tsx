import { Icon } from "@iconify/react/dist/iconify.js"

export const Services = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">El Concejo</h5>
                <h1 className="mb-0">Más Información Sobre Nosotros y Nuestros Objetivos</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <Icon icon={'mdi:clipboard-text-history'} className='text-white' style={{
                                transform: 'rotate(45deg)',
                                width: '20px',
                                height: '20px'
                            }}/>
                        </div>
                        <h4 className="mb-3">Concejales</h4>
                        <p className="m-0">Conoce quienes integran el cuerpo del Concejo del Municipio de Charata.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <Icon icon={'maki:arrow'} className='text-white' />
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <Icon icon={'eos-icons:project'} className='text-white' style={{
                                transform: 'rotate(45deg)',
                                width: '20px',
                                height: '20px'
                            }}/>
                        </div>
                        <h4 className="mb-3">Proyectos y Orden del Día</h4>
                        <p className="m-0">Te mostramos los temas a tratar en el día. Y te contamos sobre los proyectos a futuro.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <Icon icon={'maki:arrow'} className='text-white' />
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <Icon icon={'icon-park-outline:search'} className='text-white' style={{
                                transform: 'rotate(45deg)',
                                width: '20px',
                                height: '20px'
                            }}/>
                        </div>
                        <h4 className="mb-3">Información y Transparencia</h4>
                        <p className="m-0">Informate sobre nuestros sueldos y presupuestos de proyectos. Toda la información abierta al público.</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <Icon icon={'maki:arrow'} className='text-white' />
                        </a>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fab fa-android text-white"></i>
                        </div>
                        <h4 className="mb-3">Apps Development</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                            <Icon icon={'maki:arrow'} className='text-white' />
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa fa-search text-white"></i>
                        </div>
                        <h4 className="mb-3">SEO Optimization</h4>
                        <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                        <a className="btn btn-lg btn-primary rounded" href="">
                            <i className="bi bi-arrow-right"></i>
                            <Icon icon={'maki:arrow'} className='text-white' />
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                        <h3 className="text-white mb-3">Call Us For Quote</h3>
                        <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                        <h2 className="text-white mb-0">+012 345 6789</h2>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    )
}
