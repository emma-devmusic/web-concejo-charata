import Image from 'next/image';
import aboutUsImg from '../../assets/img/concejo/9.jpg';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';


export const AboutUs = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-primary text-uppercase">El Concejo</h5>
                            <h1 className="mb-0">Nuestra Misión</h1>
                        </div>
                        <p className="mb-4">En el Concejo de la Municipalidad de Charata, nuestra misión es representar los intereses de la comunidad, promover el bienestar de nuestros ciudadanos y trabajar incansablemente para mejorar la calidad de vida en nuestra ciudad. Nos esforzamos por ser un órgano transparente, inclusivo y responsable, comprometido con la participación ciudadana y la toma de decisiones que reflejen las necesidades y aspiraciones de todos los charatenses.</p>
                        <div className="row g-0 mb-3">
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-3"><Icon icon='material-symbols:done' className="text-primary fs-2 me-2" />Transparencia</h5>
                                <h5 className="mb-3"><Icon icon='material-symbols:done' className="text-primary fs-2 me-2" />Compromiso</h5>
                            </div>
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-3"><Icon icon='material-symbols:done' className="text-primary fs-2 me-2" />Participación Ciudadana</h5>
                                <h5 className="mb-3"><Icon icon='material-symbols:done' className="text-primary fs-2 me-2" />Proyectos</h5>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px" }}>
                                <Icon icon='material-symbols:call' className="text-white fs-2" />
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Comúnicate con nosotros</h5>
                                <h4 className="text-primary mb-0">3731 62-5581</h4>
                            </div>
                        </div>
                        <Link href="#contactUs" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Envíanos un Mensaje</Link>
                    </div>
                    <div className="col-lg-5" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100">
                            <Image width={600} height={600} className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src={aboutUsImg} style={{ objectFit: "cover" }} alt='Imagen sobre el Consejo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
