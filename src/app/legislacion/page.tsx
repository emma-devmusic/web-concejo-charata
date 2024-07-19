'use client'

import { Layout } from "../views/Layout"

export default function LegislacionPage() {
    return (
        <Layout title="Legislación">
            <div className="container-fluid">
                <div className="container">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h5 className="fw-bold text-primary text-uppercase">Normas de Interés Municipal</h5>
                        <h1 className="mb-0">Regulaciones y Documentos Clave del Municipio</h1>
                    </div>
                    <div className="text-center mb-5" style={{
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        <hr />
                        <p className="fs-5">En el contexto de la gestión pública y el marco legal argentino, existen varias normativas esenciales que regulan tanto el funcionamiento de los municipios como los derechos y deberes de sus empleados y ciudadanos. A continuación, presentamos una breve descripción de estas normativas clave:</p>
                        <hr />
                    </div>
                    <div className="row g-5">
                        <div className="col-12" style={{maxWidth: '1000px'}}>
                            <h2>Digesto del Municipio</h2>
                            <p>El Digesto del Municipio es un compendio de las leyes, ordenanzas y normativas que regulan el funcionamiento del gobierno local. Aquí puedes consultar todas las disposiciones legales que afectan la vida en nuestra comunidad.</p>
                            <a href="http://200.58.103.175/greenstone3/library/collection/Digesto/browse/CL1" target="_blank" className="btn btn-outline-success">Ver Digesto</a>
                        </div>
                        <div className="col-lg-6">
                            <h2>Estatuto del Empleado Municipal</h2>
                            <p>El Estatuto del Empleado Municipal es un conjunto de normas y regulaciones que rigen la relación laboral entre los empleados municipales y las administraciones locales en diversas jurisdicciones. Estas normas establecen los derechos, deberes, obligaciones y condiciones de trabajo de los empleados municipales. El objetivo principal del estatuto es garantizar un marco jurídico claro y justo para el empleo público municipal, promoviendo la eficiencia, la transparencia y el respeto a los derechos laborales.</p>
                            <a href="/legislaciones/Estatuto-del-empleado-municipal.pdf" target="_blank" className="">Ver Estatuto Del Empleado Municipal</a>

                        </div>
                        <div className="col-lg-6">
                            <h2>Código de Faltas Municipal</h2>
                            <p>El Código de Faltas Municipal es un conjunto de normas y regulaciones locales que establecen las conductas consideradas faltas o infracciones dentro del ámbito de un municipio, así como las sanciones correspondientes a dichas conductas. Este código tiene como objetivo mantener el orden y la convivencia en la comunidad, regulando aspectos que afectan la vida diaria de los habitantes del municipio.</p>
                            <a href="/legislaciones/Codigo-de-Faltas-Municipal.pdf" target="_blank" className="">Ver Código de Faltas Municipal</a>
                        </div>
                        <div className="col-lg-6">
                            <h2>Reglamento Interno Concejo Municipal</h2>
                            <p>El Reglamento Interno del Concejo Municipal es un conjunto de normas y procedimientos que regulan el funcionamiento y la organización del Concejo Municipal, que es el órgano legislativo de un municipio. Este reglamento establece cómo se deben llevar a cabo las sesiones, cómo se organizan los debates, y cuáles son los derechos y deberes de los concejales, entre otros aspectos. Su objetivo principal es asegurar que el Concejo Municipal opere de manera eficiente, transparente y democrática.</p>
                            <a href="/legislaciones/Reglamento-Interno-Concejo-Municipal.pdf" target="_blank" className="">Ver Reglamento Interno Concejo Municipal</a>
                        </div>
                        <div className="col-lg-6">
                            <h2>Constitución de la Nación Argentina</h2>
                            <p>La Constitución de la Nación Argentina es la ley fundamental y suprema del país, estableciendo la organización, funcionamiento y principios básicos del Estado argentino. Fue promulgada el 1 de mayo de 1853, con reformas importantes en 1860, 1866, 1898, 1949, 1957 y la última en 1994. La Constitución establece los derechos y deberes de los ciudadanos, la estructura del gobierno y el marco legal para la convivencia democrática.</p>
                            <a href="/legislaciones/Constitucion_nacion_argentina.pdf" target="_blank" className="">Ver Constitución de la Nación Argentina</a>
                        </div>
                        <div className="col-lg-6">
                            <h2>Ley Orgánica Municipal</h2>
                            <p>La Ley Orgánica Municipal es una legislación que regula el funcionamiento, la organización y las competencias de los municipios en un país. Su objetivo es establecer un marco jurídico claro para la administración local, garantizando la autonomía municipal y promoviendo la eficiencia y la transparencia en la gestión pública local. En Argentina, cada provincia tiene su propia Ley Orgánica Municipal, adaptada a sus particularidades y necesidades.</p>
                            <a href="/legislaciones/Ley-Organanica-Municipal.pdf" target="_blank" className="">Ver Ley Orgánica Municipal</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}