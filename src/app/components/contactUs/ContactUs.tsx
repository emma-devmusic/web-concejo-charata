import { Icon } from "@iconify/react/dist/iconify.js"

export const ContactUs = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-primary text-uppercase">Contáctanos</h5>
                            <h1 className="mb-0">¿Necesitas Contactarnos? Sentite Libre de Enviarnos un Correo o Un Mensaje</h1>
                        </div>
                        <div className="row gx-3">
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="d-flex align-items-center mb-4"><Icon icon={'subway:reply'} className="text-primary me-2" />Respuesta Inmediata</h5>
                            </div>
                            {/* <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                            </div> */}
                        </div>
                        <p className="mb-4">Nos encantaría saber de ti. Para consultas, sugerencias o comentarios, puedes comunicarte con nosotros a través de las siguientes vías.</p>
                        <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                                <Icon className='text-white' icon={'carbon:phone-filled'} style={{
                                    height: '20px',
                                    width: '20px'
                                }}/>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Llámanos</h5>
                                <h4 className="text-primary mb-0">+012 345 6789</h4>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: "60px", height: "60px"}}>
                                <Icon className='text-white' icon={'nimbus:whatsapp'} style={{
                                    height: '20px',
                                    width: '20px'
                                }}/>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">WhatsApp</h5>
                                <h4 className="text-primary mb-0">+012 345 6789</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-xl-12">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Tu Nombre" style={{height: "55px"}} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control bg-light border-0" placeholder="Tu Correo Electrónico" style={{height: "55px"}} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control bg-light border-0" placeholder="Asunto" style={{height: "55px"}} />
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control bg-light border-0" rows={3} placeholder="Mensaje"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-dark w-100 py-3" type="submit">Enviar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
