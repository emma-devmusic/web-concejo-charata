'use client'

import { Icon } from '@iconify/react/dist/iconify.js';
import { Layout } from '../views/Layout';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';


export default function ContactoPage() {

    const [values, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        issue: '',
        msg: ''
    })

    const handleSendEmail = async (e: any) => {
        e.preventDefault()
        const res = await fetch('/api/send', { method: 'POST', body: JSON.stringify(values) })
        const data = await res.json()
        if(!data.error){
            Swal.fire('Mensaje Enviado', `${data.message}`, 'success')
            reset()
        } else {
            Swal.fire('Error', 'El mensaje no pudo ser enviado', 'error')
        }
    }


    return (
        <div>
            <Layout title='Contacto'>
                <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                            <h5 className="fw-bold text-primary text-uppercase">Contactanos</h5>
                            <h1 className="mb-0">Por Cualquier Duda O Inquietud, No Dudes En Contactarnos.</h1>
                        </div>
                        <div className="row g-5 mb-5">
                            <div className="col-lg-4">
                                <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                                    <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                        <Icon className='text-white' icon={'nimbus:whatsapp'} style={{
                                            height: '20px',
                                            width: '20px'
                                        }} />
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="mb-2">Escribenos al WhatsApp.</h5>
                                        <h5 className="text-primary mb-0">3731 62-5581</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                                    <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                        <Icon className='text-white' icon={'ic:outline-email'} style={{
                                            height: '20px',
                                            width: '20px'
                                        }} />
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="mb-2">Envianos un correo.</h5>
                                        <h5 className="text-primary mb-0">concejoch@gmail.com</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                                    <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                        <Icon className='text-white' icon={'mdi:location'} style={{
                                            height: '20px',
                                            width: '20px'
                                        }} />
                                    </div>
                                    <div className="ps-4">
                                        <h5 className="mb-2">Visitanos.</h5>
                                        <h5 className="text-primary mb-0">Rivadavia 372, Charata, Chaco</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                                <form onSubmit={handleSendEmail}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input value={values.name} onChange={handleInputChange} name='name' type="text" className="form-control border-0 bg-light px-4" placeholder="Nombre" style={{ height: '55px' }} />
                                        </div>
                                        <div className="col-md-6">
                                            <input value={values.email} onChange={handleInputChange} name='email' type="email" className="form-control border-0 bg-light px-4" placeholder="Correo Electrónico" style={{ height: '55px' }} />
                                        </div>
                                        <div className="col-12">
                                            <input value={values.issue} onChange={handleInputChange} name='issue' type="text" className="form-control border-0 bg-light px-4" placeholder="Asunto" style={{ height: '55px' }} />
                                        </div>
                                        <div className="col-12">
                                            <textarea value={values.msg} onChange={handleInputChange} name='msg' className="form-control border-0 bg-light px-4 py-3" rows={4} placeholder="Mensaje"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Enviar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                                <iframe
                                    className="position-relative rounded w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d887.009441522603!2d-61.187344349201105!3d-27.2179640587114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94475b0aaa559691%3A0xaa4e88c0e08d8a95!2sMunicipalidad%20de%20Charata!5e0!3m2!1ses-419!2sar!4v1719088822253!5m2!1ses-419!2sar"
                                    style={{ minHeight: '350px', border: 0 }}
                                    allowFullScreen={undefined}
                                    aria-hidden="false"
                                    tabIndex={0}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}