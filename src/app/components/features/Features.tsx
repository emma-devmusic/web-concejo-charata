import Image from 'next/image';
import feature from '../../assets/img/concejo/5.jpg';
import { Icon } from '@iconify/react/dist/iconify.js';

export const Features = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                    <h5 className="fw-bold text-primary text-uppercase">Objetivos</h5>
                    <h1 className="mb-0">Estamos Aquí Por Un Charata Mejor</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px",height: "60px"}}>
                                    <Icon icon={'fluent:organization-48-filled'} className='text-white' />
                                </div>
                                <h4>Organización</h4>
                                <p className="mb-0">Elegidos por la comunidad. Comisiones especiales en áreas claves.</p>
                            </div>
                            <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px",height: "60px"}}>
                                    <Icon icon={'icon-park-outline:search'} className='text-white' />
                                </div>
                                <h4>Transparencia</h4>
                                <p className="mb-0">Mantenemos informada a la ciudadanía sobre nuestras acciones, decisiones y el uso de los recursos públicos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight: "350px"}}>
                        <div className="position-relative h-100">
                            <Image width={500} height={500} alt='Image Features' className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src={feature} style={{objectFit: "cover"}} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px",height: "60px"}}>
                                <Icon icon={'fa-solid:hands-helping'} className='text-white' />
                                </div>
                                <h4>Compromiso</h4>
                                <p className="mb-0">Comprometidos con la transparencia, la participación ciudadana y el bienestar de la comunidad.</p>
                            </div>
                            <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px",height: "60px"}}>
                                    <Icon icon={'codicon:organization'} className='text-white' />
                                </div>
                                <h4>Participación Ciudadana</h4>
                                <p className="mb-0">Invitamos a la comunidad a expresar sus opiniones y contribuir en la toma de decisiones</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
